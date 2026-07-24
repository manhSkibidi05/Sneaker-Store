
function ProductInCart({name , price , img , size , color , variants}){

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
            <div className="flex gap-4">
                <div className="w-24 aspect-4/5 bg-surface-container shrink-0">
                    <img alt="Monolith 01" className="w-full h-full object-cover"
                    src={img} />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                    <div className="">
                        <h3 className="font-body-md font-bold uppercase tracking-tight mb-2">{name}</h3>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-3 mt-1">
                                <div className="flex flex-wrap gap-1">
                                    {
                                        variants.map(variant => 
                                            <button key={variant.size} 
                                            className={`w-7 h-7 flex items-center justify-center border  text-[10px]  transition-colors 
                                            ${variant.size === size ? 'border-primary bg-primary text-on-primary' : 'border-surface-container-highest hover:border-primary'} `}>{variant.size}
                                            </button>
                                        )
                                    }
                                </div>
                                <div className="flex gap-2">
                                    {
                                        variants.find(variant => variant.size === size).colors.map(colorObj => 
                                            <button key={colorObj.color}
                                            className={`w-4 h-4 rounded-full ${takeColor(colorObj.color)} border border-surface-container-highest ring-offset-1 ring-primary transition-all
                                            ${colorObj.color === color ? 'ring-1' : 'hover:ring-1'}
                                            ${colorObj.stock === 0 ? 'opacity-10 pointer-events-none cursor-not-allowed' : 'cursor-pointer'}`}>
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center border border-surface-container-highest mt-2">
                            <button className="px-2 py-1 hover:bg-surface-container-low">-</button>
                            <span className="px-3 text-caption">1</span>
                            <button className="px-2 py-1 hover:bg-surface-container-low">+</button>
                        </div>
                        <span className="font-body-md">${price}.00</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductInCart