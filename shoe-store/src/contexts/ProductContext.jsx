// useReducer + context : quản lý dữ liệu tập trung về products tại đây -> truyền dữ liệu về danh sách products xuống cho mọi component cần thiết 
import {createContext , useReducer } from 'react';
import {products} from '../data/products'

// + Khởi tạo Context của product tạo ra kho chứa dữ liệu 
export const ProductContext = createContext();

// + Hàm thay đổi sản phẩm 
function reducer(){
    // thêm , sửa , xóa sản phẩm 
}

// + Khởi tạo Component trả về nơi cung cấp dữ liệu cho các component con bên trong component này 
export function ProductProvider({children}){
    const [stateProducts , dispatch] = useReducer(reducer , products);

    return(
        <ProductContext.Provider value={{stateProducts , dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

