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
            const {id , name , price , img , variant , variants , quantity} = action.payload;

            const existingItemIndex = state.items.findIndex(
                item => item.data.id === id && item.data.variant.ver === variant.ver
            );

            let newItems;
            if(existingItemIndex >= 0 ){
                newItems = state.items.map((item , index) => 
                    index === existingItemIndex ? {...item ,
                        data :  {...item.data , 
                            quantity : item.data.quantity + 1 > variant.stock  ? variant.stock : item.data.quantity + 1
                        }} : item
                    )
            }else{
                const newItem = {
                    data : {
                        id, name, price, img, variant,
                        quantity 
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
            const {id , size , color , quantity ,ver , stock} = action.payload;
            const newItems = state.items.map(item => {
                if(item.data.id === id){
                    return{
                        ...item,
                        data : {...item.data , 
                            quantity : quantity >= stock ? stock : quantity,
                            variant : {
                                ...item.data.variant , 
                                size : size ?? item.data.variant.size,
                                color : color ?? item.data.variant.color,
                                ver : ver ?? item.data.variant.ver,
                                stock : stock ?? item.data.variant.stock
                            },
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

        case 'REMOVE_ITEM' : {           
            const newItems = state.items.filter(item => item.data.id !== action.payload);
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

// Những điều cần làm và lưu ý khi định nghĩa reducer 
    // 1. Cấu trúc dữ liệu rõ ràng 
    // - Mỗi item trong giỏ nên chứa 
        // + id , name , price , img (thông tin cơ bản sản phẩm)
        // + variant (object chứa ver , size , color , stock -> phiên bản mà khách đã chọn)
        // + quantity (số lượng đặt mua)
    // -> Không cần lưu toàn bộ mảng variants gốc trong giỏ -> khi bạn muốn hiện thị tất cả các tùy chọn 

    // 2. Pure function - không mutate state 
        // + Luôn dùng spreed operator hoặc map , filter tạo mảng/obj mới
        // + Không được push , splice trực tiếp lên state cũ sẽ phá vỡ tính bất biến của redux

    // 3. Action UPDATE_CART cần payload rõ ràng 
        // + Nên truyền id của sản phẩm và các trường cần thay đổi 
        // + Sử dụng toán tử ?? để chỉ cập nhật những gì được gửi lên , giữ nguyên các giá trị khác 

    // 4. Chuẩn hóa tên action 
    // -> Nên đặt tên dạng UPPER_SNEAK_CASE là quy ước phổ biến trong redux 


