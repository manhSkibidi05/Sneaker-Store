

function ProductInCart({id , name , price , img , quantity , variant , variants , dispatch}){
    const sizes = [38 , 39 , 40 , 41 , 42 , 43 , 44 , 45];
    const colors = ['black' , 'white' , 'red' , 'gray' , 'blue'];

    let variantsOfColor = variants.filter(val => val.color === variant.color);
    let variantsOfSize = variants.filter(val => val.size === variant.size);

    const takeSizeVariant = (size) => variants.find(val => val.size === size && val.color === variant.color);
    const takeColorVariant = (color) => variants.find(val => val.color === color && val.size === variant.size);

    const downQuantity = (quantity) => quantity === 1 ? 1 : quantity - 1;
    const upQuantity = (quantity) => quantity === variant.stock ? quantity : quantity + 1;

    const checkStock = (quantity) => quantity === variant.stock; 
    
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
                    <div className="relative">
                        <div className='flex justify-between'>
                            <h3 className="font-body-md font-bold uppercase tracking-tight mb-2">{name}</h3>
                            <button onClick={() => dispatch({type : 'REMOVE_ITEM' , payload : id})} className="absolute top-0 right-0 p-1 text-on-surface-variant hover:text-primary transition-colors cursor-pointer" aria-label="Remove item">
                                <span className="material-symbols-outlined text-[18px]">close</span>
                            </button>
                        </div>
                        <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-3 mt-1">
                                <div className="flex flex-wrap gap-1">
                                    {
                                        sizes.map(size => 
                                            <button key={size} 
                                            className={`w-7 h-7 flex items-center justify-center border  text-[10px]  transition-colors 
                                            ${size === variant.size ? 'border-primary bg-primary text-on-primary' : 'border-surface-container-highest hover:border-primary'} 
                                            ${!variantsOfColor.some(obj => obj.size === size && obj.stock > 0) ? 'opacity-30 pointer-events-none' : 'cursor-pointer'}`}
                                            onClick={() => dispatch({type : 'UPDATE_CART_ITEM' , payload : {id , size , quantity , ver : takeSizeVariant(size).ver , stock : takeSizeVariant(size).stock}})}>{size}
                                            </button>
                                        )
                                    }
                                </div>
                                <div className="flex gap-2">
                                    {
                                        colors.map(color => 
                                            <button key={color}
                                            className={`w-4 h-4 rounded-full ${takeColor(color)} border border-surface-container-highest ring-offset-1 ring-primary transition-all
                                            ${color === variant.color ? 'ring-1' : 'hover:ring-1'}
                                            ${!variantsOfSize.some(obj => obj.color === color && obj.stock > 0) ? 'opacity-30 pointer-events-none' : 'cursor-pointer' }`}
                                            onClick={() => dispatch({type : 'UPDATE_CART_ITEM' , payload : {id , color , quantity , ver : takeColorVariant(color).ver , stock : takeColorVariant(color).stock}})}>
                                            </button>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center border border-surface-container-highest mt-2">
                            <button onClick={() => dispatch({type : 'UPDATE_CART_ITEM' , payload : {id , quantity : downQuantity(quantity)}})} className="px-2 py-1 hover:bg-surface-container-low">-</button>
                            <span className="px-3 text-caption">{quantity}</span>
                            <button onClick={() => dispatch({type : 'UPDATE_CART_ITEM' , payload : {id , quantity : upQuantity(quantity)}})} className="px-2 py-1 hover:bg-surface-container-low">+</button>
                        </div>
                        <span className="font-body-md">${price}.00</span>
                    </div>
                    {checkStock(quantity) && <div className="mt-2 text-[10px] text-error uppercase tracking-widest opacity-80">Maximum stock reached</div>}
                </div>
            </div>
        </>
    )
}

export default ProductInCart