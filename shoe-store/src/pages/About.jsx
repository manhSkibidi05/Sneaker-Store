import screen from '../assets/screen.png'
import hammer from '../assets/hammer.png'

function About(){

    return(
        <>
            {/* hero section */}
            <section className="relative w-full h-[90vh] overflow-hidden flex items-center justify-center bg-surface-container-lowest">
                <div className="absolute inset-0 z-0 overflow-hidden">
                    <img src={screen} className="w-full h-full object-cover scale-110" />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <div className="relative z-10 text-center px-margin-mobile">
                    <h1 className="font-headline-lg text-[48px] md:text-[84px] leading-[0.9] font-black tracking-tighter text-on-surface mb-stack-md uppercase reveal-on-scroll visible">The Soul of <br/>Every Step.</h1>
                    <p className="font-body-lg text-body-lg uppercase tracking-[0.4em] text-on-surface-variant opacity-80 reveal-on-scroll visible" style={{transitionDelay : '200ms'}}>Linh Hồn Trong Từng Bước Chân</p>
                </div>
            </section>

            {/* our story section */}
            <section className="py-40 px-margin-desktop max-w-container-max mx-auto overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
                    <div className="md:col-span-5 space-y-stack-lg sticky top-32 mb-stack-lg md:mb-0 reveal-on-scroll visible">
                        <span className="text-caption font-label-sm uppercase tracking-[0.2em] text-outline">Since 2018</span>
                        <h2 className="font-headline-lg text-[42px] md:text-[56px] leading-tight font-bold uppercase tracking-tight text-primary">Kỷ Nguyên Của Sneaker</h2>
                        <div className="w-24 h-1 bg-primary mb-stack-lg"></div>
                        <div className="space-y-6">
                            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">Sneaker không còn đơn thuần là một vật dụng bảo vệ đôi chân. 
                                Tại SNEAKER's, chúng tôi nhìn nhận sneaker như một sự giao thoa giữa công nghệ vận động và nghệ thuật đương đại. Đó là biểu tượng của sự tự do,
                                cá tính và ngôn ngữ không lời của mỗi cá nhân.</p>
                            <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">Hành trình của chúng tôi bắt đầu từ việc
                                tái định nghĩa cấu trúc của một đôi giày thể thao cổ điển.
                                Bằng cách kết hợp chất liệu da Ý thượng hạng với những nghiên cứu nhân trắc học hiện đại, 
                                chúng tôi tạo ra những đôi sneaker không chỉ đẹp trong tủ kính mà còn hoàn hảo trên mọi cung đường.</p>
                        </div>
                    </div>
                    <div className="md:col-span-7 flex flex-col gap-30">
                        <div className="w-full aspect-4/5 bg-surface-container overflow-hidden reveal-on-scroll visible" style={{transitionDelay : '300ms'}}>
                            <img src={hammer} className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 ease-out" />
                        </div>
                    </div>
                </div>
            </section>

            {/* core values section */}
            <section className="bg-surface-container-lowest py-40 px-margin-desktop">
                <div className="max-w-container-max mx-auto">
                    <div className="max-w-xl mb-20 reveal-on-scroll visible">
                        <h2 className="font-headline-lg text-[40px] font-bold uppercase tracking-widest text-primary mb-4">Triết Lý Chế Tác</h2>
                        <p className="font-body-lg text-body-lg text-on-surface-variant">
                            Mỗi đôi sneaker là một cam kết về chất lượng, nơi sự thoải mái tối đa được bao bọc trong vẻ đẹp tối giản.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-surface-container-highest border border-surface-container-highest">
                        {/* <!-- Value 1 --> */}
                        <div className="group relative flex flex-col items-start p-12 bg-white transition-all duration-500 hover:bg-surface-container-low reveal-on-scroll visible" 
                            style={{transitionDelay : '100ms'}}>
                            <div className="w-12 h-12 flex items-center justify-center bg-background mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <span className="material-symbols-outlined text-primary text-[32px]">texture</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md uppercase mb-4 tracking-wider">Da Thuộc Thượng Hạng</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                                Chúng tôi chỉ sử dụng da Full-grain từ các xưởng thuộc da danh tiếng tại Tuscany, đảm bảo độ bền và vẻ đẹp tự nhiên theo thời gian.</p>
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
                        </div>
                        {/* <!-- Value 2 --> */}
                        <div className="group relative flex flex-col items-start p-12 bg-white transition-all duration-500 hover:bg-surface-container-low reveal-on-scroll visible" 
                            style={{transitionDelay : '100ms'}}>
                            <div className="w-12 h-12 flex items-center justify-center bg-background mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <span className="material-symbols-outlined text-primary text-[32px]">orthopedics</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md uppercase mb-4 tracking-wider">Công Nghệ Công Thái Học</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Hệ thống đế đệm đa lớp được thiết kế riêng biệt để hỗ trợ vòm chân, mang lại cảm giác êm ái tuyệt đối suốt cả ngày dài.</p>
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
                        </div>
                        {/* <!-- Value 3 --> */}
                        <div className="group relative flex flex-col items-start p-12 bg-white transition-all duration-500 hover:bg-surface-container-low reveal-on-scroll visible" 
                            style={{transitionDelay : '100ms'}}>
                            <div className="w-12 h-12 flex items-center justify-center bg-background mb-10 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
                                <span className="material-symbols-outlined text-primary text-[32px]">precision_manufacturing</span>
                            </div>
                            <h3 className="font-headline-md text-headline-md uppercase mb-4 tracking-wider">Đường Kim Mũi Chỉ</h3>
                            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">Mỗi chi tiết được khâu tay tỉ mỉ bởi những nghệ nhân giàu kinh nghiệm, tạo nên sự chắc chắn và tinh tế trong từng mối nối.</p>
                            <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary group-hover:w-full transition-all duration-700"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* process Section - new Airy Section  */}
            <section className="py-40 px-margin-desktop bg-surface">
                <div className="max-w-container-max mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-25 reveal-on-scroll visible">
                        <h2 className="font-headline-lg text-[48px] font-black uppercase tracking-tighter">Kỷ Nguyên Của Sneaker</h2>
                        <p className="font-label-sm uppercase tracking-widest text-outline max-w-sidebar-width mb-2">Từ bản vẽ sơ thảo đến kiệt tác trên tay bạn.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                        <div className="reveal-on-scroll visible" style={{transitionDelay : '100ms'}}>
                            <span className="text-[64px] font-black text-surface-container-highest block mb-4">01</span>
                            <h4 className="font-headline-md uppercase mb-3">Phác Thảo</h4>
                            <p className="text-on-surface-variant">Nghiên cứu phom dáng và tỷ lệ để đạt được sự cân bằng giữa thể thao và thời trang.</p>
                        </div>
                        <div className="reveal-on-scroll visible" style={{transitionDelay : '100ms'}}>
                            <span className="text-[64px] font-black text-surface-container-highest block mb-4">02</span>
                            <h4 className="font-headline-md uppercase mb-3">Khuôn Giày</h4>
                            <p className="text-on-surface-variant">Tạo khuôn (Last) độc quyền dựa trên dữ liệu nhân trắc học của hàng ngàn khách hàng.</p>
                        </div>
                        <div className="reveal-on-scroll visible" style={{transitionDelay : '100ms'}}>
                            <span className="text-[64px] font-black text-surface-container-highest block mb-4">03</span>
                            <h4 className="font-headline-md uppercase mb-3">Lắp Ráp</h4>
                            <p className="text-on-surface-variant">Kết hợp phần thân da và đế cao su lưu hóa bằng kỹ thuật dán nhiệt và khâu gia cố.</p>
                            </div>
                        <div className="reveal-on-scroll visible" style={{transitionDelay : '100ms'}}>
                            <span className="text-[64px] font-black text-surface-container-highest block mb-4">04</span>
                            <h4 className="font-headline-md uppercase mb-3">Hoàn Thiện</h4>
                            <p className="text-on-surface-variant">Đánh bóng thủ công và kiểm tra 24 điểm chất lượng trước khi đóng hộp.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* quanlity commitment section */}
            <section className="py-50 px-margin-desktop bg-primary text-on-primary text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
                    <span className="text-[400px] font-black uppercase tracking-tighter select-none">SNEAKER</span>
                </div>
                <div className="relative z-10 max-w-4xl mx-auto reveal-on-scroll visible">
                    <span className="material-symbols-outlined text-5xl  mb-stack-lg opacity-30">format_quote</span>
                    <p className="text-[28px] md:text-[42px] font-light leading-[1.2]  italic">
                        "Chúng tôi không chỉ tạo ra sneaker. Chúng tôi đang kiến tạo những người bạn đồng hành bền bỉ, giúp bạn tự tin khẳng định bản sắc trong từng bước đi."
                    </p>
                    <div className="flex flex-col items-center gap-4 mt-15">
                        <p className="font-label-sm tracking-[0.4em] uppercase text-surface-container-highest">đậu tẩm hành</p>
                        <p className="signature-font text-[36px] font-medium">Người sáng lập &amp; Giám đốc sáng tạo</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About