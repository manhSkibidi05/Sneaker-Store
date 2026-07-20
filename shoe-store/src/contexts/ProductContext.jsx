import {createContext , useReducer } from 'react';
import {products} from '../data/products'

export const ProductContext = createContext();

function reducer(){
    // thêm , sửa , xóa sản phẩm 
}

export function ProductProvider({children}){
    const [stateProducts , dispatch] = useReducer(reducer , products);

    return(
        <ProductContext.Provider value={{stateProducts , dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

