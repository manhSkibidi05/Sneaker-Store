import useCart from '../../hooks/useCart'
import ProductInCart from '../ui/ProductInCart'
import NoResults from '../ui/NoResults';

function CartDrawer({isOpen , closeCart}){
    const {cart , dispatch} = useCart();
    console.log(cart)

    return(
        <div className={
            `fixed inset-0 z-100 bg-black/40 backdrop-blur-sm transition-opacity duration-300
            ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} `
            } 
            onClick={
                (e) => {
                    if(e.target === e.currentTarget){
                        closeCart();
                    }
                }
            }
            >
            <div className={
                `absolute right-0 top-0 h-full w-full md:w-112.5 bg-surface shadow-2xl flex flex-col transition-transform duration-500 ease-in-out
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}`
            }
            >
                {/* <!-- Cart Header --> */}
                <div className="flex items-center justify-between px-margin-desktop py-8 border-b border-surface-container-highest">
                    <h2 className="font-headline-md text-headline-md font-black tracking-tighter uppercase">Your Cart (1)</h2>
                    <button onClick={closeCart} className="hover:opacity-70 transition-opacity cursor-pointer">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* <!-- Cart Items --> */}
                <div className="flex-1 overflow-y-auto px-margin-desktop py-stack-lg space-y-stack-lg hide-scrollbar">
                    {
                        cart.length === 0 ? 
                        <NoResults></NoResults>
                        : 
                        cart.map(product => 
                            <ProductInCart key={product.id} name={product.name} price={product.price} img={product.img} size={product.size} color={product.color} ></ProductInCart>
                        )
                    }
                    
                </div>

                {/* <!-- Summary & CTA --> */}
                <div className="p-margin-mobile border-t border-surface-container-highest bg-surface-container-lowest">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-label-sm uppercase tracking-widest">Subtotal</span>
                            <span className="font-headline-md">$605.00</span>
                        </div>
                    <div className="space-y-3">
                        <button className="w-full bg-secondary-container text-on-secondary-container font-label-sm py-4 uppercase tracking-widest hover:opacity-90 transition-opacity">Proceed to Checkout</button>
                        <button className="w-full border border-primary text-primary font-label-sm py-4 uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all">Continue Shopping</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartDrawer