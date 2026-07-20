import ProductCard from '../components/ui/ProductCard'
import ButtonAll from '../components/ui/ButtonAll'
import { useProduct } from '../hooks/useProduct'
import { useFilter } from '../hooks/useFilter'
import productFilter from '../utils/productFilter'

function Home(){
    const {stateProducts} = useProduct();
    const {filter , dispatch} = useFilter();
    const productsFilter = productFilter(stateProducts , filter);
    console.log(filter)

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
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : null})} className="border border-primary bg-primary text-on-primary py-2 text-caption">ALL</button>
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : 38})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">38</button>
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : 39})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">39</button>
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : 40})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">40</button>
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : 41})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">41</button>
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : 42})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">42</button>
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : 43})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">43</button>
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : 44})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">44</button>
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : 45})} className="border border-surface-container-highest py-2 text-caption hover:border-primary transition-colors">45</button>
                            </div>
                        </div>
                        {/* <!-- Color Filter --> */}
                        <div className="border-b border-surface-container-highest pb-stack-md">
                            <h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-stack-md">Color</h3>
                            <div className="flex flex-wrap gap-2">
                                <button onClick={() => dispatch({type : 'Color-filter' , payload : null})} className="w-6 h-6  border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                                <button onClick={() => dispatch({type : 'Color-filter' , payload : 'black'})} className="w-6 h-6 bg-black border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                                <button onClick={() => dispatch({type : 'Color-filter' , payload : 'white'})} className="w-6 h-6 bg-white border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                                <button onClick={() => dispatch({type : 'Color-filter' , payload : 'red'})} className="w-6 h-6 bg-red-500 border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                                <button onClick={() => dispatch({type : 'Color-filter' , payload : 'gray'})} className="w-6 h-6 bg-[#C0C0C0] border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                                <button onClick={() => dispatch({type : 'Color-filter' , payload : 'blue'})} className="w-6 h-6 bg-secondary border border-surface-container-highest hover:ring-1 ring-offset-2 ring-primary transition-all"></button>
                            </div>
                        </div>
                        {/* <!-- Price Filter --> */}
                        <div className="pb-stack-md">
                            <h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-stack-md">Price</h3>
                            <ul className="space-y-2">
                                <li onClick={() => dispatch({type : 'Price-filter' , payload : {minPrice : null , maxPrice : null}})} className="flex items-center gap-2 group cursor-pointer">
                                    <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                                    <span className="text-body-md text-on-surface-variant group-hover:text-primary">ALL</span>
                                </li>
                                <li onClick={() => dispatch({type : 'Price-filter' , payload : {minPrice : 150 , maxPrice : 250}})} className="flex items-center gap-2 group cursor-pointer">
                                    <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                                    <span className="text-body-md text-on-surface-variant group-hover:text-primary">$150 - $250</span>
                                </li>
                                <li onClick={() => dispatch({type : 'Price-filter' , payload : {minPrice : 250 , maxPrice : 400}})} className="flex items-center gap-2 group cursor-pointer">
                                    <div className="w-4 h-4 border border-outline group-hover:border-primary transition-colors"></div>
                                    <span className="text-body-md text-on-surface-variant group-hover:text-primary">$250 - $400</span>
                                </li>
                                <li onClick={() => dispatch({type : 'Price-filter' , payload : {minPrice : 400 , maxPrice : Infinity}})} className="flex items-center gap-2 group cursor-pointer">
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
                            productsFilter.map(product => 
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