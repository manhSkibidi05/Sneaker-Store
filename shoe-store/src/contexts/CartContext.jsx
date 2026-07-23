import { createContext , useReducer } from 'react'
// import useProduct from '../hooks/useProduct'
import {products} from '../data/products'

export const CartContext = createContext();

const initialCart = [];

function reducer(state , action){
    switch(action.type){
        case 'Add-to-cart' : {
            const prd = products.find(product => product.id === parseInt(action.payload.id));
            let size = action.payload.size;
            let color = action.payload.color;
            if(size === null && color === null){
                size = prd.sizes[0].size;
                color = prd.sizes[0].colors[0].color;
            }
            if(size !== null && color === null){
                color = prd.sizes.find(sizeObj => sizeObj.size === size).colors[0].color
            }
            if(size === null && color !== null){
                size = prd.sizes.find(sizeObj => {
                    return sizeObj.colors.some(colorObj => colorObj.color === color)
                }).size
            }
            const newPrd = {
                id : prd.id,
                name : prd.name,
                price : prd.price,
                img : prd.img,
                color,
                size,
            }
            return[
                ...state , newPrd
            ]
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

