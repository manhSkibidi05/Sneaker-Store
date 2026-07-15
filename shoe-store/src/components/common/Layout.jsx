// src/components/common/Layout.jsx
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
    return (
        <div className="bg-surface text-on-background font-body-md selection:bg-primary-fixed selection:text-primary">
            <Header />
            <main className="w-full max-w-container-max mx-auto px-margin-desktop py-stack-lg">
                <Outlet /> 
            </main>
            <Footer />
    </div>
    );
};

export default Layout;