// custom hook : sử dụng use reducer để quản lý state lọc -> Dùng để chứa state filter giúp hiện thị giữ liệu hợp lí dựa trên điều kiện lọc của người dùng 
import {useReducer , createContext} from 'react'

export const FilterContext = createContext();

// + trạng thái lọc ban đầu : mặc định chưa có lọc bất kì sản phẩm nào 
const initialFilter = {
    size : null,
    color : null,
    minPrice : null,
    maxPrice : null,
    page : 1,
    keyword :'',
}

// + hàm xử lí hành động gửi về thông qua dispatch -> hàm này dựa trên state trước đó và thông tin từ action gồm type và payload từ đó tạo ra state mới dựa trên dữ liệu đó
const reducer = (state , action) => {
    switch(action.type){
        case 'Size-filter' : {
            return{
                ...state , size : action.payload
            }
        };

        case 'Color-filter': {
            return{
                ...state , color : action.payload
            }
        };

        case 'Price-filter' : {
            return{
                ...state , 
                minPrice : action.payload.minPrice ,
                maxPrice : action.payload.maxPrice 
            }
        };

        case 'Prev-filter' : {
            if(state.page === 1) return state;
            return{
                ...state,
                page : state.page - 1
            }
        }

        case 'Next-filter' : {
            return{
                ...state,
                page : state.page + 1
            }
        }

        case 'Keyword-filter' : {
            return{
                ...state,
                keyword : action.payload
            }
        }

        case 'Clear-filters' : {
            return initialFilter
        }
        default : 
            return state;
    }
} 

// + custom hook useFilter trả về đối tượng gồm filter chứa state lọc và dispatch hàm thay đổi state dựa trên hành động của người dùng 
export function FilterProvider({children}){
    const [filter , dispatch] = useReducer(reducer , initialFilter);

    return (
        <FilterContext.Provider value={{filter , dispatch}}>
            {children}
        </FilterContext.Provider>
    )
}
