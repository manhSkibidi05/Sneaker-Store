// src/components/common/Header.jsx
import { Link, NavLink } from 'react-router-dom';
import { FaShoppingCart, FaUser , FaSearch } from 'react-icons/fa'
import useFilter from '../../hooks/useFilter'
import useCartUI from '../../hooks/useCartUI'

const Header = () => {
  const {filter , dispatch} = useFilter();
  const {openCart} = useCartUI();

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
          {/* input search */}
            <div className="flex items-center gap-stack-md">
              <div className="relative flex items-center justify-end w-45 transition-all duration-300 ease-in-out focus-within:w-[320px]">
                <input 
                onChange={(e) => dispatch({type : 'Keyword-filter' ,payload : e.target.value })}
                value={filter.keyword}
                type="text" 
                placeholder="Search products..." 
                className="w-full bg-transparent border-b border-surface-container-highest focus:border-primary focus:ring-0 py-1 px-2 font-body-md text-body-md transition-all duration-300 outline-none placeholder:text-on-surface-variant placeholder:opacity-50"/>
                <FaSearch className='absolute right-2 pointer-events-none  text-on-surface-variant'></FaSearch>
              </div>
            </div>
          
          <button onClick={openCart} className='hover:opacity-70 transition-opacity p-2 cursor-pointer'>
            <FaShoppingCart className='text-on-surface-variant'></FaShoppingCart>
          </button>
          <Link to='/' className='hover:opacity-70 transition-opacity p-2'>
            <FaUser className='text-on-surface-variant'></FaUser>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;