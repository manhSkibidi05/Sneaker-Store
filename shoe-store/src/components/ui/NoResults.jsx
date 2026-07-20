import ButtonAll from './ButtonAll';
import {FaBan } from 'react-icons/fa'

function NoResults({children}){
    return (
        <section className="flex flex-col items-center justify-center py-20 text-center ">
            <div className="mb-8">
                <FaBan className=" text-surface-container-highest text-9xl font-light"></FaBan>
            </div>
            <h1 className="font-headline-lg text-[40px] leading-tight font-extrabold uppercase tracking-tighter text-primary mb-4">No Results Found</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md mx-auto  leading-relaxed">We couldn't find any footwear matching your current selection. Try adjusting your filters or browsing our new arrivals.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 ">
                {children}
            </div>
        </section>
    )
}

export default NoResults;