function productFilter (products , filter){
    const {size , color , minPrice , maxPrice , page} = filter;

    return products.filter(product => {
        if(page !== product.page) return false;

        if(minPrice !== null && product.price < minPrice) return false;
        if(maxPrice !== null && product.price > maxPrice) return false;

        if(size === null && color === null) return true;

        const hasVariant = product.sizes.some(sizeObj => {
            if(size !== null && parseInt(size) !== sizeObj.size) return false;

            const hasColor = sizeObj.colors.some(colorObj => {
                if(color !== null && color !== colorObj.color) return false;
                return colorObj.stock > 0;
            })

            return hasColor;
        });

        return hasVariant;
    })
}

export default productFilter