import ProductCard from '../components/ui/ProductCard'
import ButtonAll from '../components/ui/ButtonAll'
import {useProduct} from '../hooks/useProduct'

function Home(){
    const {products , dispatch} = useProduct()

    return(
        <>
            <section className='mb-16'>
                <span className='font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant opacity-60'>Collections / All Sneakers</span>
                <h1 className='font-headline-lg text-[48px] leading-tight font-black tracking-tighter text-primary mt-4 uppercase'>The Art of Movement</h1>
            </section>
            <div className='flex flex-col md:flex-row gap-gutter'>
                <aside className="w-full md:w-sidebar-width shrink-0">
                    <div className="sticky top-28 space-y-stack-lg">
                        {/* <!-- Size Filter --> */}
                        <div className="border-b border-surface-container-highest pb-stack-md">
                            <h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-stack-md">Size</h3>
                            <div className="grid grid-cols-4 gap-2">
                                <button onClick={(e) => dispatch({type : 'Size-filter' , payload : e.target.value})} className="border border-primary bg-primary text-on-primary py-2 text-caption">ALL</button>
                                <button onClick={(e) => dispatch({type : 'Size-filter' , payload : e.target.value})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">38</button>
                                <button onClick={(e) => dispatch({type : 'Size-filter' , payload : e.target.value})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">39</button>
                                <button onClick={(e) => dispatch({type : 'Size-filter' , payload : e.target.value})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">40</button>
                                <button onClick={(e) => dispatch({type : 'Size-filter' , payload : e.target.value})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">41</button>
                                <button onClick={(e) => dispatch({type : 'Size-filter' , payload : e.target.value})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">42</button>
                                <button onClick={(e) => dispatch({type : 'Size-filter' , payload : e.target.value})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">43</button>
                                <button onClick={(e) => dispatch({type : 'Size-filter' , payload : e.target.value})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">44</button>
                                <button onClick={(e) => dispatch({type : 'Size-filter' , payload : e.target.value})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">45</button>
                            </div>
                        </div>
                        {/* <!-- Color Filter --> */}
                        <div className="border-b border-surface-container-highest pb-stack-md">
                            <h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-stack-md">Color</h3>
                            <div className="flex flex-wrap gap-2">
                                <button className="w-6 h-6 bg-black border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                                <button className="w-6 h-6 bg-white border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                                <button className="w-6 h-6 bg-[#E5E5E5] border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                                <button className="w-6 h-6 bg-[#C0C0C0] border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                                <button className="w-6 h-6 bg-secondary border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                            </div>
                        </div>
                        {/* <!-- Price Filter --> */}
                        <div className="pb-stack-md">
                            <h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-stack-md">Price</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 group cursor-pointer">
                                    <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                                    <span className="text-body-md text-on-surface-variant group-hover:text-primary">$150 - $250</span>
                                </li>
                                <li className="flex items-center gap-2 group cursor-pointer">
                                    <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                                    <span className="text-body-md text-on-surface-variant group-hover:text-primary">$250 - $400</span>
                                </li>
                                <li className="flex items-center gap-2 group cursor-pointer">
                                    <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                                    <span className="text-body-md text-on-surface-variant group-hover:text-primary">$400+</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
                <div className='flex-1'>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                        {
                            products.map(product => 
                                <ProductCard key={product.id} name={product.name} img={product.img} price={product.price} heading={product.heading}></ProductCard>
                            )
                        }
                    </div>
                    <div className='mt-16 flex justify-center'>
                        <ButtonAll>
                            Load More
                        </ButtonAll>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home