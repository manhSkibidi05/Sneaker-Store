import {createContext , useState} from 'react';

export const CartUIContext = createContext();

export function CartUIProvider({children}){
    const [isOpen , setIsOpen] = useState(false);

    const openCart = () => setIsOpen(true);
    const closeCart = () => setIsOpen(false);

    return (
        <CartUIContext.Provider value={{isOpen , openCart , closeCart}}>
            {children}
        </CartUIContext.Provider>
    )
}