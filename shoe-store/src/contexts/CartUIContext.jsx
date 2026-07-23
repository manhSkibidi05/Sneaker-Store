// khởi tạo context + useState tạo ra nơi quản lí trạng thái chung của CartUI -> quản lí trạng thái đóng mở của giỏ hàng
import {createContext , useState} from 'react';

// + Tạo Context của CartUI nơi chứa dữ liệu cần truyền xuống
export const CartUIContext = createContext();

// + Tạo component provider nơi cung cấp dữ liệu cho phần tử con trong nó
export function CartUIProvider({children}){
    // + Tạo dữ liệu ban đầu -> sử dụng useState do dữ liệu đơn giản 
    const [isOpen , setIsOpen] = useState(false);

    // + Tạo các hàm thay đổi state -> khi các component chỉ cần gọi hàm là có thể kích hoạt được
    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    // + Trả về component của context.provider chứa dữ liệu cần truyền xuống 
    return (
        <CartUIContext.Provider value={{isOpen , openCart , closeCart}}>
            {children}
        </CartUIContext.Provider>
    )
}