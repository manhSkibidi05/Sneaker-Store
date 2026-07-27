import { createContext , useReducer } from 'react'

export const CartContext = createContext();

const initialCart = {
    items : [],
    totalPrice : 0,
    totalQuantity : 0
};

function reducer(state , action){
    switch(action.type){
        case 'Add-cart' : {
            const data = {
                id : action.payload.id,
                name : action.payload.name,
                price : action.payload.price,
                img : action.payload.img,
                variant : action.payload.variant
            }
            console.log(action.payload.variants)
            const cartItem = {
                data , variants : action.payload.variants 
            }
            const newItems = [...state.items , cartItem]
            return{
                ...state ,
                items : newItems
            }
        }
        case 'Update-cart' : {
            return{
                ...state
            }
        }
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

