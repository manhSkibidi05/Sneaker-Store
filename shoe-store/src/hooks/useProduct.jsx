import {ProductContext} from '../contexts/ProductContext';
import {useContext} from 'react'

export function useProduct(){
    const data = useContext(ProductContext);
    if(!data) throw new Error('Component không nằm trong Provider của Context này');
    return data
}