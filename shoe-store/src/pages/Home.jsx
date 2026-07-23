import ProductCard from '../components/ui/ProductCard'
import ButtonAll from '../components/ui/ButtonAll'
import NoResults from '../components/ui/NoResults'
import useProduct from '../hooks/useProduct'
import useFilter from '../hooks/useFilter'
import productFilter from '../utils/productFilter'
import {FaCheck } from 'react-icons/fa'


function Home(){
    const {stateProducts} = useProduct();
    const {filter , dispatch} = useFilter();
    const productsFilter = productFilter(stateProducts , filter);

    const sizes = [38 , 39 , 40 , 41 , 42 , 43 , 44 , 45];
    const colors = ['black' , 'white' , 'red' , 'gray' , 'blue'];
    const prices = [
        {label : 'low' , min : 150 , max : 250},
        {label : 'mid' , min : 250 , max : 400},
        {label : 'high', min : 400 , max : 1000}
        
    ]

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

    return(
        <>
            <section className='mb-16'>
                <span className='font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant opacity-60'>Collections / All Sneakers</span>
                <h1 className='font-headline-lg text-[48px] leading-tight font-black tracking-tighter text-primary mt-4 uppercase'>The Art of Movement</h1>
            </section>
            <div className='flex flex-col md:flex-row gap-gutter'>
                <aside className="w-full md:w-sidebar-width shrink-0">
                    <div className="sticky top-28 space-y-stack-lg">
                        {/* Phần button lọc theo kích thước */}
                        <div className="border-b border-surface-container-highest pb-stack-md">
                            <h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-stack-md">Size</h3>
                            <div className="grid grid-cols-4 gap-2">
                                <button onClick={() => dispatch({type : 'Size-filter' , payload : null})} className={`border py-2 cursor-pointer text-caption transition-colors ${filter.size === null ? 'border-primary bg-primary text-on-primary' : 'border-surface-container-highest  hover:border-primary'}`}>ALL</button>
                                {
                                    sizes.map(size => 
                                        <button key={size} onClick={() => dispatch({type : 'Size-filter' , payload : size})} className={`border py-2 cursor-pointer text-caption transition-colors ${filter.size === size ? 'border-primary bg-primary text-on-primary' : 'border-surface-container-highest  hover:border-primary'}`}>{size}</button>
                                    )
                                }
                                
                            </div>
                        </div>
                        {/* Phần button lọc theo màu */}
                        <div className="border-b border-surface-container-highest pb-stack-md">
                            <h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-stack-md">Color</h3>
                            <div className="flex flex-wrap gap-2">
                                <button onClick={() => dispatch({type : 'Color-filter' , payload : null})} className={`w-6 h-6 cursor-pointer  border border-surface-container-highest ring-offset-2 ring-primary transition-all ${filter.color === null ? 'ring-1' : 'hover:ring-1' }`}></button>
                                {
                                    colors.map(color => 
                                        <button key={color} onClick={() => dispatch({type : 'Color-filter' , payload : color})} className={`w-6 h-6 cursor-pointer ${takeColor(color)}  border border-surface-container-highest ring-offset-2 ring-primary transition-all ${filter.color === color ? 'ring-1' : 'hover:ring-1' }`}></button>
                                    )
                                }
                                
                            </div>
                        </div>
                        {/* Phần button lọc theo giá */}
                        <div className="pb-stack-md">
                            <h3 className="font-label-sm text-label-sm uppercase tracking-widest mb-stack-md">Price</h3>
                            <ul className="space-y-2">
                                <li onClick={() => dispatch({type : 'Price-filter' , payload : {minPrice : null , maxPrice : null}})} className="flex items-center gap-2 group cursor-pointer">
                                    <div className={`w-4 h-4 border border-outline group-hover:border-primary transition-colors flex items-center justify-center ${filter.minPrice === null ? 'bg-primary' : ''}` }>
                                        { filter.minPrice === null ? <FaCheck className="w-3 h-3 text-surface-bright" /> : ''}
                                    </div>
                                    <span className="text-body-md text-on-surface-variant group-hover:text-primary">ALL</span>
                                </li>
                                {
                                    prices.map(price => 
                                        <li key={price.label} onClick={() => dispatch({type : 'Price-filter' , payload : {minPrice : price.min , maxPrice : price.max}})} className="flex items-center gap-2 group cursor-pointer">
                                            <div className={`w-4 h-4 border border-outline group-hover:border-primary transition-colors flex items-center justify-center ${filter.minPrice === price.min ? 'bg-primary' : ''}` }>
                                                { filter.minPrice === price.min ? <FaCheck className="w-3 h-3 text-surface-bright" /> : ''}
                                            </div>
                                            <span className="text-body-md text-on-surface-variant group-hover:text-primary">${`${price.min} - $${price.max}`}</span>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                </aside>
                {/* Hiện thị danh sách sản phẩm đã lọc */}
                <div className='flex-1'>
                    {
                        productsFilter.length === 0 
                        ? <NoResults>
                            <button 
                            className=" cursor-pointer border border-primary px-12 py-4 font-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300" 
                            onClick={() => dispatch({type : 'Clear-filters'})}>CLEAR ALL FILTERS</button>
                        </NoResults> 
                        :
                        <>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
                            {
                                productsFilter.map(product => 
                                    <ProductCard key={product.id} id={product.id} name={product.name} img={product.img} price={product.price} heading={product.heading} 
                                    size={filter.size} color={filter.color}>
                                    </ProductCard>
                                )
                            }
                            </div>
                            
                        </>
                        
                    }
                    {/* button điều hướng các trang sản phẩm */}
                    <div className="mt-16 flex justify-center">
                        <div className="flex items-center gap-stack-lg">
                            <button onClick={() => dispatch({type : 'Prev-filter'})}
                            className={`border text-sm border-surface-container-highest px-4 py-2 font-label-sm uppercase tracking-widest ${filter.page === 1 ? 'cursor-not-allowed' : 'hover:border-primary cursor-pointer'} transition-all duration-300 flex items-center gap-2`}>
                                <span className="material-symbols-outlined text-[16px]">chevron_left</span>
                                Previous
                            </button>
                            <span className="font-label-sm text-sm uppercase tracking-widest text-primary font-bold">Page {filter.page}</span>
                            <button onClick={() => dispatch({type : 'Next-filter'})} className="cursor-pointer border text-sm border-surface-container-highest px-4 py-2 font-label-sm uppercase tracking-widest hover:border-primary transition-all duration-300 flex items-center gap-2">
                                Next
                                <span className="material-symbols-outlined text-[16px]">chevron_right</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home