import {useContext} from 'react';
import {CartUIContext} from '../contexts/CartUIContext';

function useCartUI(){
    const data = useContext(CartUIContext);
    if(!data) throw new Error('dữ liệu không tồn tại do component bạn không nằm trong provider của context này');
    return data;
}

export default useCartUI