
function ProductInCart({name , price , img , size , color}){

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
                                    <button className="w-7 h-7 flex items-center justify-center border border-surface-container-highest text-[10px] hover:border-primary transition-colors">{size}</button>
                                    {/* <button className="w-7 h-7 flex items-center justify-center border border-primary bg-primary text-on-primary text-[10px]">39</button>
                                    <button className="w-7 h-7 flex items-center justify-center border border-surface-container-highest text-[10px] hover:border-primary transition-colors">40</button>
                                    <button className="w-7 h-7 flex items-center justify-center border border-surface-container-highest text-[10px] hover:border-primary transition-colors">41</button>
                                    <button className="w-7 h-7 flex items-center justify-center border border-surface-container-highest text-[10px] hover:border-primary transition-colors">42</button> */}
                                </div>
                                <div className="flex gap-2">
                                    <button className={`w-4 h-4 rounded-full ${takeColor(color)} border border-surface-container-highest hover:ring-1 ring-offset-1 ring-primary transition-all`}></button>
                                    {/* <button className="w-4 h-4 rounded-full bg-white border border-primary ring-1 ring-offset-1 ring-primary transition-all"></button>
                                    <button className="w-4 h-4 rounded-full bg-black border border-surface-container-highest hover:ring-1 ring-offset-1 ring-primary transition-all"></button> */}
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