// src/components/common/Header.jsx
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser , FaSearch } from 'react-icons/fa'


const Header = () => {

    return (
    <header className="w-full top-0 sticky z-50 bg-surface dark:bg-background border-b border-surface-container-highest dark:border-outline-variant transition-all duration-300 ease-in-out">
        <nav className="flex justify-between items-center h-20 px-margin-desktop w-full max-w-container-max mx-auto">
        <Link to="/" className="font-headline-lg text-headline-lg font-black tracking-tighter text-primary dark:text-on-background">
            SNEAKER's
        </Link>

        <div className="hidden md:flex items-center gap-stack-lg">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-body-md text-body-md uppercase tracking-widest transition-colors relative 
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 
              after:bg-primary after:origin-left after:transition-transform after:duration-300 after:ease-in-out
              ${
                isActive
                  ? 'text-primary after:scale-x-50'
                  : 'text-on-surface-variant dark:text-outline hover:text-primary after:scale-x-0'
              }`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="about"
            className={({ isActive }) =>
              `font-body-md text-body-md uppercase tracking-widest transition-colors relative 
                  after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 
              after:bg-primary after:origin-left after:transition-transform after:duration-300 after:ease-in-out
              ${
                isActive
                  ? 'text-primary after:scale-x-50'
                  : 'text-on-surface-variant dark:text-outline hover:text-primary after:scale-x-0'
              }`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              `font-body-md text-body-md uppercase tracking-widest transition-colors relative 
                after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 
              after:bg-primary after:origin-left after:transition-transform after:duration-300 after:ease-in-out
              ${
                isActive
                  ? 'text-primary after:scale-x-50'
                  : 'text-on-surface-variant dark:text-outline hover:text-primary after:scale-x-0'
              }`
            }
          >
            CONTACT
          </NavLink>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-stack-md">
          <Link to='/' className='hover:opacity-70 transition-opacity p-2'>
            <FaSearch className='text-on-surface-variant'></FaSearch>
          </Link>
          <Link to="/" className='hover:opacity-70 transition-opacity p-2'>
            <FaShoppingCart className='text-on-surface-variant'></FaShoppingCart>
          </Link>
          <Link to='/' className='hover:opacity-70 transition-opacity p-2'>
            <FaUser className='text-on-surface-variant'></FaUser>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;