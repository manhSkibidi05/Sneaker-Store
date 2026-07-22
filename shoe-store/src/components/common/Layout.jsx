// src/components/common/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import useCartUI from '../../hooks/useCartUI';

const Layout = () => {
    const {isOpen} = useCartUI()
    return (
        <div className="bg-surface text-on-background font-body-md selection:bg-primary-fixed selection:text-primary">
            <Header />
            <main className="w-full max-w-container-max mx-auto px-margin-desktop py-stack-lg">
                <Outlet /> 
            </main>
            <Footer />
            {isOpen ? <CartDrawer></CartDrawer> :''}
        </div>
    );
};

export default Layout;