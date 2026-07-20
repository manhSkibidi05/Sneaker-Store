import {useReducer} from 'react'

const initialFilter = {
    size : null,
    color : null,
    minPrice : null,
    maxPrice : null,
    page : 1
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

        case 'Prev-filter' : {
            if(state.page === 1) return state;
            return{
                ...state,
                page : state.page - 1
            }
        }

        case 'Next-filter' : {
            return{
                ...state,
                page : state.page + 1
            }
        }

        case 'Clear-filters' : {
            return initialFilter
        }
        default : 
            return state;
    }
} 

export function useFilter(){
    const [filter , dispatch] = useReducer(reducer , initialFilter);

    return {filter , dispatch}
}
