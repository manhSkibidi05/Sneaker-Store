import { useParams } from "react-router-dom"

function Product(){
    const params = useParams()
    return (
        <>
            {/* <!-- Product Grid Section --> */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">    
                {/* <!-- Sticky Gallery Column --> */}
                <div className="space-y-gutter lg:sticky lg:top-28">
                    <div className="aspect-4/5 bg-surface-container overflow-hidden">
                        <img className="w-full h-full object-cover"  />
                    </div>
                    <div className="grid grid-cols-2 gap-gutter">
                        <div className="aspect-square bg-surface-container">
                            <img className="w-full h-full object-cover" />
                        </div>
                        <div className="aspect-square bg-surface-container">
                            <img className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
                {/* <!-- Purchase Column --> */}
                <div className="lg:pl-stack-lg flex flex-col pt-8 lg:pt-0">
                    <header className="mb-stack-lg border-b border-surface-container pb-stack-lg">
                        <h1 className="font-headline-lg text-headline-lg uppercase font-bold tracking-tight mb-2">MONOLITH 01</h1>
                        <p className="font-headline-md text-headline-md text-primary">$285.00</p>
                    </header>
                    <div className="mb-12 space-y-stack-md">
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            A masterpiece of minimalist engineering. Full-grain Italian leather, handcrafted for unparalleled comfort and a timeless silhouette. Designed to bridge the gap between architectural precision and effortless daily wear.
                        </p>
                    </div>
                    {/* <!-- Color Selector --> */}
                    <div className="mb-10">
                        <span className="block font-label-sm text-label-sm uppercase mb-4">Color: <span>White</span></span>
                        <div className="flex gap-4">
                            <button className="w-8 h-8 bg-[#F5F5F5] border border-primary outline outline-offset-2 outline-primary rounded-none transition-all" title="White"></button>
                            <button className="w-8 h-8 bg-[#111111] border border-surface-container hover:outline hover:outline-offset-2 hover:outline-outline transition-all" title="Black"></button>
                            <button className="w-8 h-8 bg-[#A0A0A0] border border-surface-container hover:outline hover:outline-offset-2 hover:outline-outline transition-all" title="Gray"></button>
                            <button className="w-8 h-8 bg-[#405F8C] border border-surface-container hover:outline hover:outline-offset-2 hover:outline-outline transition-all" title="Blue"></button>
                        </div>
                    </div>
                    {/* <!-- Size Selector --> */}
                    <div className="mb-10">
                        <div className="flex justify-between mb-4">
                            <span className="font-label-sm text-label-sm uppercase">Select Size (EU)</span>
                            <button className="font-label-sm text-label-sm uppercase underline opacity-70 hover:opacity-100">Size Guide</button>
                        </div>
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                            <button className="h-12 border border-surface-container flex items-center justify-center font-body-md text-body-md hover:border-primary transition-colors">38</button>
                            <button className="h-12 border border-surface-container flex items-center justify-center font-body-md text-body-md hover:border-primary transition-colors">39</button>
                            <button className="h-12 border border-primary bg-primary text-on-primary flex items-center justify-center font-body-md text-body-md">40</button>
                            <button className="h-12 border border-surface-container flex items-center justify-center font-body-md text-body-md hover:border-primary transition-colors">41</button>
                            <button className="h-12 border border-surface-container flex items-center justify-center font-body-md text-body-md hover:border-primary transition-colors">42</button>
                            <button className="h-12 border border-surface-container flex items-center justify-center font-body-md text-body-md hover:border-primary transition-colors">43</button>
                            <button className="h-12 border border-surface-container flex items-center justify-center font-body-md text-body-md hover:border-primary transition-colors">44</button>
                            <button className="h-12 border border-surface-container flex items-center justify-center font-body-md text-body-md opacity-30 cursor-not-allowed">45</button>
                        </div>
                    </div>
                    {/* <!-- Actions --> */}
                    <div className="flex flex-col gap-4 mb-16">
                        <div className="flex gap-gutter">
                            <div className="flex items-center border border-surface-container h-14">
                                <button className="px-4 hover:bg-surface-container transition-colors">
                                    <span className="material-symbols-outlined text-sm">remove</span>
                                </button>
                                <span className="w-8 text-center font-body-md font-bold">1</span>
                                <button className="px-4 hover:bg-surface-container transition-colors">
                                    <span className="material-symbols-outlined text-sm">add</span>
                                </button>
                            </div>
                            <button className="flex-1 bg-primary text-on-primary h-14 font-label-sm text-label-sm uppercase tracking-widest hover:bg-on-surface-variant transition-colors duration-300">
                                Add To Cart
                            </button>
                        </div>
                        <button className="w-full border border-primary h-14 font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-container transition-colors duration-300 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined" >favorite</span>
                            Add to Wishlist
                        </button>
                    </div>
                    {/* <!-- Accordion Details --> */}
                    <div className="border-t border-surface-container">
                        <div className="accordion-item border-b border-surface-container">
                            <button className="w-full py-6 flex justify-between items-center text-left group" >
                                <span className="font-label-sm text-label-sm uppercase tracking-wider">Product Story</span>
                                <span className="material-symbols-outlined icon-rotate transition-transform duration-300">add</span>
                            </button>
                            <div className="accordion-content">
                                <div className="pb-6 text-on-surface-variant font-body-md leading-relaxed">
                                    The Monolith 01 was born from a desire to strip away the noise of contemporary footwear.
                                    Inspired by brutalist architecture and Nordic minimalism, it features a seamless integration
                                    of materials that age beautifully with time. Hand-finished in our small-batch atelier.
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item border-b border-surface-container">
                            <button className="w-full py-6 flex justify-between items-center text-left group" >
                                <span className="font-label-sm text-label-sm uppercase tracking-wider">Material &amp; Care</span>
                                <span className="material-symbols-outlined icon-rotate transition-transform duration-300">add</span>
                            </button>
                            <div className="accordion-content">
                                <ul className="pb-6 text-on-surface-variant font-body-md leading-relaxed space-y-2">
                                    <li className="">• 100% Full-grain Italian Calf Leather</li>
                                    <li className="">• Margom Rubber Outsole</li>
                                    <li className="">• Removable Ortholite Memory Foam Insole</li>
                                    <li className="">• Treat with a premium leather balm every 3 months.</li>
                                    <li className="">• Do not machine wash.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="accordion-item border-b border-surface-container">
                            <button className="w-full py-6 flex justify-between items-center text-left group" >
                                <span className="font-label-sm text-label-sm uppercase tracking-wider">Shipping &amp; Returns</span>
                                <span className="material-symbols-outlined icon-rotate transition-transform duration-300">add</span>
                            </button>
                            <div className="accordion-content">
                                <div className="pb-6 text-on-surface-variant font-body-md leading-relaxed">
                                    Complimentary standard shipping on orders over $250. Returns are accepted within 30 days of delivery in original packaging and unworn condition.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Bottom Section: Technical Details --> */}
            <section className="mt-32 pt-16 border-t border-surface-container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
                <div>
                    <h2 className="font-headline-lg text-headline-lg uppercase font-bold tracking-tight mb-2">Customer Reviews</h2>
                        <div className="flex items-center gap-3">
                            <div className="flex gap-0.5">
                                <span className="material-symbols-outlined text-sm fill-1" >star</span>
                                <span className="material-symbols-outlined text-sm fill-1" >star</span>
                                <span className="material-symbols-outlined text-sm fill-1" >star</span>
                                <span className="material-symbols-outlined text-sm fill-1" >star</span>
                                <span className="material-symbols-outlined text-sm fill-1" >star</span>
                            </div>
                            <span className="font-body-md text-body-md font-bold">4.9/5</span>
                            <span className="font-caption text-caption text-on-surface-variant opacity-60">(124 Reviews)</span>
                        </div>
                        </div>
                    <button className="px-8 h-12 border border-primary font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-container transition-colors duration-300">
                    Write a Review
                    </button>
            </div>
            <div className="space-y-12">
                <div className="pb-12 border-b border-surface-container">
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                            <div className="flex gap-0.5 mb-2">
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-label-sm text-label-sm uppercase">Marcus G.</span>
                                <span className="px-2 py-0.5 bg-surface-container text-[10px] uppercase tracking-tighter font-bold rounded-none">Verified Buyer</span>
                            </div>
                        </div>
                        <span className="font-caption text-caption text-on-surface-variant opacity-60">Oct 12, 2023</span>
                    </div>
                    <h4 className="font-headline-md text-headline-md mb-2">Architectural Perfection</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-3xl">
                        The silhouette is even more striking in person. The leather quality is exceptional—soft yet structured. They required almost no break-in period, which is rare for a sneaker of this build quality.
                    </p>
                </div>
                <div className="pb-12 border-b border-surface-container">
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                            <div className="flex gap-0.5 mb-2">
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-label-sm text-label-sm uppercase">Elena S.</span>
                                <span className="px-2 py-0.5 bg-surface-container text-[10px] uppercase tracking-tighter font-bold rounded-none">Verified Buyer</span>
                            </div>
                        </div>
                        <span className="font-caption text-caption text-on-surface-variant opacity-60">Sep 28, 2023</span>
                    </div>
                    <h4 className="font-headline-md text-headline-md mb-2">Minimalist Staple</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-3xl">
                        I've been looking for a clean, off-white sneaker that doesn't feel over-designed. The Monolith 01 is exactly that. It pairs perfectly with tailored trousers or casual denim. Truly a versatile piece.
                    </p>
                </div>
                <div className="pb-12">
                    <div className="flex justify-between items-start mb-4">
                        <div className="space-y-1">
                            <div className="flex gap-0.5 mb-2">
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                                <span className="material-symbols-outlined text-xs" >star</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="font-label-sm text-label-sm uppercase">Julian K.</span>
                                <span className="px-2 py-0.5 bg-surface-container text-[10px] uppercase tracking-tighter font-bold rounded-none">Verified Buyer</span>
                            </div>
                        </div>
                        <span className="font-caption text-caption text-on-surface-variant opacity-60">Aug 15, 2023</span>
                    </div>
                    <h4 className="font-headline-md text-headline-md mb-2">Superior Comfort</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-3xl">
                        The cushioning is firm but supportive. You can feel the craftsmanship in the stitching and the way the sole is bonded. Worth every penny for someone who values longevity over trends.
                    </p>
                </div>
            </div>
            </section>
        </>
    )
}

export default Product