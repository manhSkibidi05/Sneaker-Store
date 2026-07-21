// + Hàm tiện ích sử dụng dữ liệu để tính toán trả về dữ liệu mới 
// -> Hàm này cần dữ liệu gồm mảng sản phẩm và state lọc dữ liệu từ đó xử lí các trường hợp lọc tồn tại trong state trả về mảng sản phẩm đã được lọc 

function productFilter (products , filter){
    const {size , color , minPrice , maxPrice , page} = filter;

    // + sử dụng phương thức tĩnh filter lọc dữ liệu -> trả về mảng mới với những phần tử trong mảng t/m điều kiện của hàm callback 
    return products.filter(
        // + product là 1 phần tử trong mảng nếu dữ liệu bên trong product trả về true thì sẽ lấy phần từ này sang mảng mới , nếu false loại bỏ phần tử này 
        product => {
        // + kiểm tra các trường dữ liệu từ trên xuống dưới -> kiểm tra xem nếu state lọc này đã tồn tại chưa nếu tồn tại rồi sẽ kiểm tra với các trường của product 
        if(page !== product.page) return false;

        if(minPrice !== null && product.price < minPrice) return false;
        if(maxPrice !== null && product.price > maxPrice) return false;

        if(size === null && color === null) return true;

        // + sử dụng thêm phương thức some để kiểm tra 1 mảng con -> hàm some sẽ duyệt tất cả các trường hợp và chỉ cần 1 trường hợp trả về true thì phương thức trả về true
        const hasVariant = product.sizes.some(sizeObj => {
            if(size !== null && parseInt(size) !== sizeObj.size) return false;

            const hasColor = sizeObj.colors.some(colorObj => {
                if(color !== null && color !== colorObj.color) return false;
                return colorObj.stock > 0;
            })

            return hasColor;
        });

        return hasVariant;
        // -> Với dữ liệu phức tạp cần lọc chỉ cần 1 biến thể của sản phẩm tồn tại và trả về true thì sản phẩm đó vẫn sẽ được thêm vào mảng mới sau khi lọc 
    })
}

export default productFilter