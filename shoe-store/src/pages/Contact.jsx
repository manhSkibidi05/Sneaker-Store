import map from '../assets/map.png'
import design1 from '../assets/design1.png'
import design2 from '../assets/design2.png'
import design3 from '../assets/design3.png'

function Contact(){

    return(
        <>
            {/* hero section */}
            <div className="pt-16 pb-12 px-margin-desktop text-center md:text-left">
                <h2 className="text-[64px] md:text-[84px] leading-tight font-extrabold tracking-tighter text-primary uppercase">
                    GET IN TOUCH
                </h2>
            </div>

            <section className="px-margin-desktop py-12 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                {/* <!-- Left Column: Info --> */}
                    <div className="space-y-16">
                        <div>
                            <h3 className="font-label-sm text-label-sm uppercase text-outline mb-6">Our Showroom</h3>
                            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface max-w-sm">45 Trang Tien Street
                            <br className=""/>Hoan Kiem District, Hanoi, Vietnam</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
                            <div>
                                <h3 className="font-label-sm text-label-sm uppercase text-outline mb-6">Email</h3>
                                <div className="space-y-2">
                                    <p className="font-body-md text-body-md text-on-surface">Customer Care<br/>
                                        <a className="hover:underline" href="mailto:care@lessentiel.com">manhphanvp112@gmail.com</a>
                                    </p>
                                    <p className="font-body-md text-body-md text-on-surface pt-4">Press<br/>
                                        <a className="hover:underline" href="mailto:press@lessentiel.com">manhmoimoi05@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                        <div>
                            <h3 className="font-label-sm text-label-sm uppercase text-outline mb-6">Hours</h3>
                            <p className="font-body-md text-body-md text-on-surface">
                                Mon — Fri: 10AM — 7PM<br/>
                                Sat: 11AM — 6PM<br/>
                                Sun: Closed
                            </p>    
                        </div>
                    </div>
                        {/* <!-- Social Media Links (Contextual) --> */}
                        <div className="pt-8 border-t border-surface-container flex gap-8">
                            <a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all" href="#">Instagram</a>
                            <a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all" href="#">Journal</a>
                            <a className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant hover:text-primary transition-all" href="#">Pinterest</a>
                        </div>
                    </div>
                {/* <!-- Right Column: Form --> */}
                <div>
                    <form className="space-y-12" id="contactForm">
                        <div className="space-y-2 group">
                            <label className="font-label-sm text-label-sm uppercase text-outline group-focus-within:text-primary transition-colors" htmlFor="name">Name</label>
                            <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-surface-container focus:border-primary focus:ring-0 focus:outline-0 px-0 py-4 font-body-lg text-body-lg transition-colors placeholder:text-surface-variant"
                                id="name" placeholder="Enter your full name" type="text"/>
                        </div>
                        <div className="space-y-2 group">
                            <label className="font-label-sm text-label-sm uppercase text-outline group-focus-within:text-primary transition-colors" htmlFor="email">Email Address</label>
                            <input className="w-full bg-transparent border-t-0 border-x-0 border-b border-surface-container focus:border-primary focus:ring-0 focus:outline-0 px-0 py-4 font-body-lg text-body-lg transition-colors placeholder:text-surface-variant" 
                            id="email" placeholder="email@example.com" type="email"/>
                        </div>
                        <div className="space-y-2 group">
                            <label className="font-label-sm text-label-sm uppercase text-outline group-focus-within:text-primary transition-colors" htmlFor="message">Message</label>
                            <textarea className="w-full bg-transparent border-t-0 border-x-0 border-b border-surface-container focus:border-primary focus:ring-0 focus:outline-0 px-0 py-4 font-body-lg text-body-lg transition-colors resize-none placeholder:text-surface-variant" id="message" placeholder="How can we assist you?" rows="4"></textarea>
                        </div>
                        <button 
                        className="w-full md:w-auto px-12 py-5 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm uppercase tracking-[0.2em] hover:bg-secondary hover:text-white transition-all duration-300" type="submit">
                            Send Message
                        </button>
                    </form>
                    </div>
                </div>
            </section>

            {/* <!-- Showroom Map Section --> */}
            <section className="w-full h-150 bg-surface-container-high overflow-hidden relative">
                {/* <!-- Full-width Map --> */}
                <div className="w-full h-full bg-cover bg-center" 
                style={{backgroundImage : `url(${map})`}}>
                </div>
                {/* <!-- Map Overlay Pin --> */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute w-14 h-14 bg-primary/20 rounded-full animate-ping"></div>
                        <div className="w-4 h-4 bg-primary rounded-full relative z-10 border-4 border-white shadow-lg"></div>
                    </div>
                </div>
            </section>

            <section className="px-margin-desktop py-24 grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
                <div className="aspect-3/4 bg-surface-container-low overflow-hidden">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="A high-end, minimalist studio shot of a sneaker designer's mood board." 
                    src={design1}/>
                </div>
                <div className="aspect-3/4 bg-surface-container-low overflow-hidden mt-12 md:mt-24">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    alt="Close-up of a master craftsman hand-stitching a premium leather sneaker." 
                    src={design2}/>
                </div>
                <div className="aspect-3/4 bg-surface-container-low overflow-hidden">
                    <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="An artistic, minimalist shot of a single high-end sneaker displayed like a piece of art on a concrete pedestal." 
                    src={design3}/>
                </div>
            </section>
        </>
    )
}

export default Contact