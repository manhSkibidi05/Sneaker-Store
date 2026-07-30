// + Hàm tiện ích sử dụng dữ liệu để tính toán trả về dữ liệu mới 
// -> Hàm này cần dữ liệu gồm mảng sản phẩm và state lọc dữ liệu từ đó xử lí các trường hợp lọc tồn tại trong state trả về mảng sản phẩm đã được lọc
import shoe11 from '../assets/shoe11.png'
import shoe21 from '../assets/shoe21.png'
import shoe31 from '../assets/shoe31.png'
import shoe41 from '../assets/shoe41.png'
import shoe51 from '../assets/shoe51.png'
import shoe61 from '../assets/shoe61.png'
import shoe71 from '../assets/shoe71.png'
import shoe81 from '../assets/shoe81.png' 

// hàm lấy ra biến thể hiện tại của sản phẩm dựa trên điều kiện lọc -> cần truyền vào 1 sản phẩm và size/màu của sản phẩm tìm ra biến thể của sản phẩm đó
export const getVariant = (product, size, color) => {
    // size và color là điều kiện lọc hiện tại so sánh với các biến thể của sản phẩm để tìm ra biến thể hiện tại 

    // nếu size và color lọc chưa lọc -> lấy biến thể đầu
    if (size === null && color === null) {
        return product.variants[0] || null;
    }

    // nếu size có giá trị lấy biến thể đầu theo size
    if (size !== null && color === null) {
        return product.variants.find(v => v.size === size) || null;
    }

    // nếu color có giá trị lấy biến thể đầu theo color
    if (size === null && color !== null) {
        return product.variants.find(v => v.color === color) || null;
    }

    // nếu cả size và color thì tìm biến thể có cả 2 
    return product.variants.find(v => v.size === size && v.color === color) || null;
};

export function productFilter (products , filter){
    // lấy dữ liệu từ điều kiện lọc 
    const {size , color , minPrice , maxPrice , page , keyword} = filter;
    
    // lấy mảng mới đã lọc dựa trên điều kiện lọc 
    const productsFilter = products.filter(
        product => {
            if(page !== product.page) return false;

            if(keyword.trim() !== '' && !product.name.toLowerCase().includes(keyword.trim().toLowerCase())) return false;

            if(minPrice !== null && product.price < minPrice) return false;
            if(maxPrice !== null && product.price > maxPrice) return false;

            if(size !== null && !product.variants.some(variant => variant.size === size)) return false;
            if(color !== null && !product.variants.some(variant => variant.color === color)) return false;

            return true;
    });

    // dựa trên mảng mới đã lọc tạo ra mảng mới với biến thế được tìm 
    return productsFilter.map(product => {
        const variant = getVariant(product , size , color) ;
        
        return{
            name : product.name,
            id: product.id,
            heading : product.heading,
            price : product.price,
            img : product.img,
            page : product.page,
            variant : variant
        }
    });
}

