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
            let size = action.payload.size;
            let color = action.payload.color;
            if(size === null && color === null){
                size = action.payload.variants.find(variant => variant.colors.some(colorObj => colorObj.stock > 0)).size;
                color = action.payload.variants.find(variant => variant.size === size).colors.find(colorObj => colorObj.stock > 0 ).color;
            }
            if(size !== null && color === null){
                color = action.payload.variants.find(sizeObj => sizeObj.size === size).colors[0].color
            }
            if(size === null && color !== null){
                size = action.payload.variants.find(sizeObj => {
                    return sizeObj.colors.some(colorObj => colorObj.color === color && colorObj.stock > 0)
                }).size
            }
            const data = {
                id : action.payload.id,
                idVariant : `${size}-${color}`,
                name : action.payload.name,
                price : action.payload.price,
                img : action.payload.img,
                color,
                size,
            }
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

