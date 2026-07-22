import shoe1 from '../../assets/shoe1.jpg'
import useCartUI from '../../hooks/useCartUI'

function CartDrawer(){
    const {closeCart} = useCartUI();

    return(
        <div className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm transition-opacity duration-300" 
            id="cart-drawer-overlay">
            <div className="absolute right-0 top-0 h-full w-full md:w-112.5 bg-surface shadow-2xl flex flex-col transition-transform duration-500 ease-in-out" 
            id="cart-drawer">
                {/* <!-- Cart Header --> */}
                <div className="flex items-center justify-between px-margin-desktop py-8 border-b border-surface-container-highest">
                    <h2 className="font-headline-md text-headline-md font-black tracking-tighter uppercase">Your Cart (1)</h2>
                    <button onClick={closeCart} className="hover:opacity-70 transition-opacity cursor-pointer">
                        <span className="material-symbols-outlined">close</span>
                    </button>
                </div>

                {/* <!-- Cart Items --> */}
                <div className="flex-1 overflow-y-auto px-margin-desktop py-stack-lg space-y-stack-lg hide-scrollbar">
                    {/* <!-- Item  --> */}
                    <div className="flex gap-4">
                        <div className="w-24 aspect-4/5 bg-surface-container shrink-0">
                            <img alt="Monolith 01" className="w-full h-full object-cover"
                            src={shoe1} />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                            <div className="">
                                <h3 className="font-body-md font-bold uppercase tracking-tight mb-2">Air force 1</h3>
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col gap-3 mt-1">
                                        <div className="flex flex-wrap gap-1">
                                            <button 
                                            className="w-7 h-7 flex items-center justify-center border border-surface-container-highest text-[10px] hover:border-primary transition-colors">38</button>
                                            <button className="w-7 h-7 flex items-center justify-center border border-primary bg-primary text-on-primary text-[10px]">39</button>
                                            <button className="w-7 h-7 flex items-center justify-center border border-surface-container-highest text-[10px] hover:border-primary transition-colors">40</button>
                                            <button className="w-7 h-7 flex items-center justify-center border border-surface-container-highest text-[10px] hover:border-primary transition-colors">41</button>
                                            <button className="w-7 h-7 flex items-center justify-center border border-surface-container-highest text-[10px] hover:border-primary transition-colors">42</button>
                                        </div>
                                        <div className="flex gap-2">
                                            <button className="w-4 h-4 rounded-full bg-white border border-primary ring-1 ring-offset-1 ring-primary transition-all"></button>
                                            <button className="w-4 h-4 rounded-full bg-black border border-surface-container-highest hover:ring-1 ring-offset-1 ring-primary transition-all"></button>
                                            <button className="w-4 h-4 rounded-full bg-secondary border border-surface-container-highest hover:ring-1 ring-offset-1 ring-primary transition-all"></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center border border-surface-container-highest mt-2">
                                    <button className="px-2 py-1 hover:bg-surface-container-low">-</button>
                                    <span className="px-3 text-caption">2</span>
                                    <button className="px-2 py-1 hover:bg-surface-container-low">+</button>
                                </div>
                                <span className="font-body-md">$285.00</span>
                            </div>
                        </div>
                    </div>
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