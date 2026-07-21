// custom hook : sử dụng useContext và Context của product -> dùng để cho các component con nằm trong provider của context có thể lấy dữ liệu 
import {ProductContext} from '../contexts/ProductContext';
import {useContext} from 'react'

// custom hook lấy dữ liệu từ context nếu không trả về dữ liệu sẽ ném ra lỗi do component không nằm trong phạm vi truyền dữ liệu 
export function useProduct(){
    const data = useContext(ProductContext);
    if(!data) throw new Error('Component không nằm trong Provider của Context này');
    return data
}