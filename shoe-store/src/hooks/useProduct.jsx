import {ProductContext} from '../contexts/ProductContext';
import {useContext} from 'react'

export function useProducts(){
    const data = useContext(ProductContext);
    if(!data) throw new Error('Component không nằm trong Provider của Context này');
    return data
}