// + Hàm tiện ích sử dụng dữ liệu để tính toán trả về dữ liệu mới 
// -> Hàm này cần dữ liệu gồm mảng sản phẩm và state lọc dữ liệu từ đó xử lí các trường hợp lọc tồn tại trong state trả về mảng sản phẩm đã được lọc
import shoe1 from '../assets/shoe1.jpg'
import shoe2 from '../assets/shoe2.jpg'
import shoe3 from '../assets/shoe3.jpg'
import shoe4 from '../assets/shoe4.jpg'
import shoe5 from '../assets/shoe5.jpg'
import shoe6 from '../assets/shoe6.jpg'
import shoe7 from '../assets/shoe7.jpg'
import shoe8 from '../assets/shoe8.jpg' 

const getVariant = (product, size, color) => {
    // Nếu không có yêu cầu size và color -> lấy variant đầu tiên
    if (size === null && color === null) {
        return product.variants[0] || null;
    }

    // Nếu có size, không có color -> tìm variant theo size
    if (size !== null && color === null) {
        return product.variants.find(v => v.size === size) || null;
    }

    // Nếu có color, không có size -> tìm variant theo color
    if (size === null && color !== null) {
        return product.variants.find(v => v.color === color) || null;
    }

    // Nếu có cả size và color -> tìm khớp cả hai
    return product.variants.find(v => v.size === size && v.color === color) || null;
};

export function productFilter (products , filter){
    const {size , color , minPrice , maxPrice , page , keyword} = filter;
    
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

    // console.log(productsFilter[0].variants)

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

export default productFilter