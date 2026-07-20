import {useReducer} from 'react'

const initialFilter = {
    size : null,
    color : null,
    minPrice : null,
    maxPrice : null
}

const reducer = (state , action) => {
    switch(action.type){
        case 'Size-filter' : {
            return{
                ...state , size : action.payload
            }
        };

        case 'Color-filter': {
            return{
                ...state , color : action.payload
            }
        };

        case 'Price-filter' : {
            return{
                ...state , 
                minPrice : action.payload.minPrice ,
                maxPrice : action.payload.maxPrice 
            }
        };
        default : 
            return state;
    }
} 

export function useFilter(){
    const [filter , dispatch] = useReducer(reducer , initialFilter);

    return {filter , dispatch}
}
