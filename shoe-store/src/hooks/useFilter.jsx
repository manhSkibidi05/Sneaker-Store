import {useContext} from 'react';
import {FilterContext} from '../contexts/FilterContext';

function useFilter(){
    const data = useContext(FilterContext);
    if(!data) throw new Error('Component không nằm trong provider cung cấp dữ liệu của context');
    return data
}

export default useFilter