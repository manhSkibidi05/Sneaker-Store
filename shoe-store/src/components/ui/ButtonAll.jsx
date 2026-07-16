function ButtonAll({children}){
    return(
        <button className="border border-primary px-12 py-4 font-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300">
            {children}
        </button>
    )
}

export default ButtonAll