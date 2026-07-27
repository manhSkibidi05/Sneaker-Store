import useCart from '../../hooks/useCart';

function ProductCard({ id, name, img, heading, price, variant , variants}) {
    const { dispatch } = useCart();
    const isOutOfStock = variant.stock === 0; 

    return (
        <div className="product-card flex flex-col gap-4 group cursor-pointer">
            <div className="relative w-full aspect-4/5 bg-surface-container overflow-hidden shadow-sm transition-shadow hover:shadow-xl">
            {/* Ảnh sản phẩm */}
            <div
            className={`w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110 ${
                isOutOfStock ? 'opacity-50' : ''
            }`}
            style={{ backgroundImage: `url(${img})` }}
            ></div>

            {/* Badge "Out of Stock" */}
            {isOutOfStock && (
                <div className="absolute top-3 left-3 bg-black/70 text-white text-xs font-bold uppercase px-2 py-1  tracking-wider z-10">
                    Out of Stock
                </div>
            )}

            {/* Overlay khi hover */}
            <div
            className={`product-overlay absolute inset-0 bg-black/20 transition-opacity duration-300 flex flex-col justify-end p-6 ${
                isOutOfStock ? 'opacity-100 bg-black/40' : 'opacity-0 group-hover:opacity-100'
            }`}
            >
            <button
                onClick={() => {
                if (!isOutOfStock) {
                    dispatch({
                    type: 'Add-cart',
                    payload: { id, img, name, price, variant , variants },
                    });
                }
                }}
                disabled={isOutOfStock}
                className={` w-full py-3 font-bold text-sm tracking-widest flex items-center justify-center gap-2 transition-all ${
                isOutOfStock
                    ? 'bg-neutral-400 text-white cursor-not-allowed'
                    : 'bg-primary text-on-primary hover:bg-neutral-800 cursor-pointer'
                }`}
            >
                <span className="material-symbols-outlined text-base">
                {isOutOfStock ? 'block' : 'shopping_cart'}
                </span>
                {isOutOfStock ? 'OUT OF STOCK' : 'ADD TO CART'}
            </button>
            </div>
        </div>

        {/* Thông tin sản phẩm */}
        <div className="flex flex-col items-start gap-1 px-1">
            <p
            className={`font-body-lg font-bold uppercase tracking-tight ${
                isOutOfStock ? 'text-neutral-400' : 'text-primary'
            }`}
            >
            {name}
            </p>
            <p className="font-body-md text-on-surface-variant opacity-70">{heading}</p>
            <p
            className={`font-body-md mt-1 ${
                isOutOfStock ? 'text-neutral-400 line-through' : ''
            }`}
            >
            ${price}.00
            </p>
            {isOutOfStock && (
            <p className="text-sm text-error font-semibold"></p>
            )}
        </div>
        </div>
    );
}

export default ProductCard;