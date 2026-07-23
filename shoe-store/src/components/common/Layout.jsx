// src/components/common/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import useCartUI from '../../hooks/useCartUI';

const Layout = () => {
    const {isOpen , closeCart} = useCartUI()
    return (
        <div className="bg-surface text-on-background font-body-md selection:bg-primary-fixed selection:text-primary">
            <Header />
            <main className="w-full max-w-container-max mx-auto px-margin-desktop py-stack-lg">
                <Outlet /> 
            </main>
            <Footer />
            {/* Đặt component giỏ hàng ở layout bao phủ toàn bộ trang web -> truyền xuống trạng thái và hành động đóng cho giỏ hàng bằng props */}
            <CartDrawer isOpen={isOpen} closeCart={closeCart}></CartDrawer> 
        </div>
    );
};

export default Layout;