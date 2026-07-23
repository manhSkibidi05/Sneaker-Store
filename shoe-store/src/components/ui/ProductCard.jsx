import useCart from '../../hooks/useCart'

function ProductCard({id, name , img , heading , price , size , color}){
    const {dispatch} = useCart();

    return(
    <div className="product-card flex flex-col gap-4 group cursor-pointer">
        <div className="relative w-full aspect-4/5 bg-surface-container  overflow-hidden shadow-sm transition-shadow hover:shadow-xl">
            <div className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-110" 
                style={{backgroundImage: `url(${img})` }}>
            </div>

            <div className="product-overlay absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <button 
                onClick={() => dispatch({type : 'Add-to-cart', payload : {id , size , color}})}
                className="cursor-pointer w-full bg-primary text-on-primary py-3  font-bold text-sm tracking-widest flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all">
                    <span className="material-symbols-outlined text-base">shopping_cart</span>
                        ADD TO CART 
                </button>
            </div>
        </div>
        <div className="flex flex-col items-start gap-1 px-1">
            <p className="font-body-lg font-bold uppercase tracking-tight text-primary">{name}</p>    
            <p className="font-body-md text-on-surface-variant opacity-70">{heading}</p>
            <p className="font-body-md mt-1">${price}.00</p>
        </div>
    </div>
    )
}

export default ProductCard