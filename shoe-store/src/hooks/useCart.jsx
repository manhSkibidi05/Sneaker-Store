import {useContext} from 'react';
import {CartContext} from '../contexts/CartContext';

function useCart(){
    const data = useContext(CartContext);
    if(!data) throw new Error('Lỗi do component không nằm trong provider của context');
    return data;
}

export default useCart