import { useParams , Link} from "react-router-dom";
import { useState } from "react";
import useProduct from "../hooks/useProduct";
import useCart from "../hooks/useCart";
import { getVariant } from "../utils/productFilter";
import { products } from "../data/products";

function Product(){
    const [quantity , setQuantity] = useState(1);
    const [color , setColor] = useState(null);
    const [size , setSize] = useState(null);
    const params = useParams();
    const {stateProducts} = useProduct();
    const {dispatch} = useCart();

    const productState = stateProducts.find(value => value.id === parseInt(params.id));

    const variant = getVariant(productState , size , color);

    const variantsOfSize = productState.variants.filter(v => v.size === variant.size);
    const variantsOfColor = productState.variants.filter(v => v.color === variant.color);

    const sizes = [38 , 39 , 40 , 41 , 42 , 43 , 44 , 45];
    const colors = ['black' , 'white' , 'red' , 'gray' , 'blue'];
    const takeColor = (color) => {
        switch(color){
            case 'black':
                return 'bg-black';
            case 'white':
                return 'bg-white';
            case 'red' :
                return 'bg-red-500';
            case 'gray' :
                return 'bg-[#C0C0C0]';
            case 'blue' :
                return 'bg-secondary';
            default:
                return '';
        }
    }

    return (
        <>
            {/* <!-- Breadcrumb --> */}
            <nav className="mb-12">
                <ol className="flex gap-2 font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant opacity-60">
                    <Link to='/' className="hover:text-primary transition-colors">Collections / All Sneakers</Link>
                    <li className="opacity-50">/</li>
                    <li className="text-primary font-extrabold">{productState.name}</li>
                </ol>
            </nav>
            {/* <!-- Product Grid Section --> */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-gutter items-start">    
                {/* <!-- Sticky Gallery Column --> */}
                <div className="space-y-gutter lg:sticky lg:top-28">
                    <div className="aspect-4/5 bg-surface-container overflow-hidden">
                        <img className="w-full h-full object-cover" src={productState.img} />
                    </div>
                    <div className="grid grid-cols-2 gap-gutter">
                        <div className="aspect-square bg-surface-container">
                            <img className="w-full h-full object-cover" src={productState.img2}/>
                        </div>
                        <div className="aspect-square bg-surface-container">
                            <img className="w-full h-full object-cover" src={productState.img3}/>
                        </div>
                    </div>
                </div>
                {/* <!-- Purchase Column --> */}
                <div className="lg:pl-stack-lg flex flex-col pt-8 lg:pt-0">
                    <header className="mb-stack-lg border-b border-surface-container pb-stack-lg">
                        <h1 className="font-headline-lg text-headline-lg uppercase font-bold tracking-tight mb-2">{productState.name}</h1>
                        <p className="font-headline-md text-headline-md text-primary">${productState.price}.00</p>
                    </header>
                    <div className="mb-12 space-y-stack-md">
                        <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                            A masterpiece of minimalist engineering. Full-grain Italian leather, handcrafted for unparalleled comfort and a timeless silhouette. Designed to bridge the gap between architectural precision and effortless daily wear.
                        </p>
                    </div>
                    {/* <!-- Color Selector --> */}
                    <div className="mb-10">
                        <span className="block font-label-sm text-label-sm uppercase mb-4">Color: <span>{variant.color}</span></span>
                        <div className="flex gap-4">
                            {
                                colors.map(color => 
                                    <button key={color}  
                                    className={`w-8 h-8 cursor-pointer ${takeColor(color)}  border border-surface-container-highest ring-offset-2 ring-primary transition-all 
                                    ${variant.color === color ? 'ring-1' : 'hover:ring-1' } 
                                    ${!variantsOfSize.some(v => v.color === color && v.stock > 0) && 'opacity-30 pointer-events-none'} `}
                                    onClick={() => setColor(color)}>
                                    </button>
                                )
                            }
                        </div>
                    </div>
                    {/* <!-- Size Selector --> */}
                    <div className="mb-10">
                        <div className="flex justify-between mb-4">
                            <span className="font-label-sm text-label-sm uppercase">Select Size (EU)</span>
                        </div>
                        <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                            {
                                sizes.map(size => 
                                    <button key={size} className={`h-12 border cursor-pointer flex items-center justify-center font-body-md text-body-md transition-colors
                                    ${variant.size === size ? 'border-primary bg-primary text-on-primary' : 'border-surface-container hover:border-primary'} 
                                    ${!variantsOfColor.some(v => v.size === size && v.stock > 0) && 'opacity-30 pointer-events-none' }`}
                                    onClick={() => setSize(size)}>{size}
                                    </button>
                                )
                            }
                        </div>
                    </div>
                    {/* <!-- Actions --> */}
                    <div className="flex flex-col gap-4 mb-16">
                        <div className="flex gap-gutter">
                            <div className="flex items-center border border-surface-container h-14">
                                <button onClick={() => setQuantity(quantity => quantity === 1 ? 1 : quantity - 1)} className="px-4 hover:bg-surface-container transition-colors">
                                    <span className="material-symbols-outlined text-sm">remove</span>
                                </button>
                                <span className="w-8 text-center font-body-md font-bold">{quantity}</span>
                                <button onClick={() => setQuantity(quantity => quantity === variant.stock ? variant.stock : quantity + 1)} className="px-4 hover:bg-surface-container transition-colors">
                                    <span className="material-symbols-outlined text-sm">add</span>
                                </button>
                            </div>
                            <button onClick={() => dispatch({type : 'ADD_TO_CART' , payload : {id : productState.id , name : productState.name , price : productState.price , img : productState.img , variant , variants : productState.variants , quantity}})} 
                            className="flex-1 bg-primary text-on-primary h-14 font-label-sm text-label-sm uppercase tracking-widest hover:bg-on-surface-variant transition-colors duration-300">
                                Add To Cart
                            </button>
                        </div>
                        <button className="w-full border border-primary h-14 font-label-sm text-label-sm uppercase tracking-widest hover:bg-surface-container transition-colors duration-300 flex items-center justify-center gap-2">
                            <span className="material-symbols-outlined" >favorite</span>
                            Add to Wishlist
                        </button>
                    </div>
                    {/* cảnh báo khi số lượng sản phẩm lớn hơn mức tồn kho */}
                    {quantity === variant.stock && <div className="mt-2 text-12 text-error uppercase tracking-widest opacity-80 ">Maximum stock reached</div>}
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