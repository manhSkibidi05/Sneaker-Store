import { createContext , useReducer } from 'react'

export const CartContext = createContext();

const initialCart = {
    items : [],
    totalPrice : 0,
    totalQuantity : 0
};

function reducer(state , action){
    switch(action.type){
        case 'ADD_TO_CART' : {
            const {id , name , price , img , variant , variants} = action.payload;

            const existingItemIndex = state.items.findIndex(
                item => item.data.id === id && item.data.variant.ver === variant.ver
            );

            let newItems;
            if(existingItemIndex >= 0 ){
                newItems = state.items.map((item , index) => 
                    index === existingItemIndex ? {...item , data : {...item.data , quantity : item.data.quantity + 1}} : item
                )
            }else{
                const newItem = {
                    data : {
                        id, name, price, img, variant,
                        quantity : 1
                    },
                    variants 
                };
                newItems = [...state.items , newItem]
            }
            const totalQuantity = newItems.reduce((sum , item) => sum + item.data.quantity ,0)
            const totalPrice = newItems.reduce((sum , item) => sum + (item.data.price * item.data.quantity), 0)

            return{
                ...state,
                items : newItems,
                totalPrice,
                totalQuantity,
            }
        }
        
        case 'UPDATE_CART_ITEM' : {
            const {id , size , color , quantity ,ver} = action.payload;
            console.log('UPDATE_ITEM payload:', { id, quantity, size, color, ver });
            const newItems = state.items.map(item => {
                if(item.data.id === id){
                    return{
                        ...item,
                        data : {...item.data , 
                            quantity : quantity,
                            variant : {
                                ...item.data.variant , 
                                size : size ?? item.data.variant.size,
                                color : color ?? item.data.variant.color,
                                ver : ver ?? item.data.variant.ver,
                            }
                        }
                    }
                }
                return item;
            })
            
            const totalQuantity = newItems.reduce((sum , item) => sum + item.data.quantity ,0);
            const totalPrice = newItems.reduce((sum , item) => sum + (item.data.price * item.data.quantity), 0);
            return {
                ...state,
                items : newItems,
                totalPrice,
                totalQuantity
            }
        }
        
        case 'CLEAR_CART' : {
            return initialCart
        }

        default :
            return state;
    }
}

export function CartProvider({children}){
    const [cart , dispatch] = useReducer(reducer , initialCart);
    
    return (
        <CartContext.Provider value={{cart , dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

