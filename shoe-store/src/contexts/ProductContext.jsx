import {createContext , useReducer } from 'react';

export const ProductContext = createContext();

const initialProducts = [
    {
        id: 1,
        name: "NIKE AIR MAX",
        sizes: [
        {
            size: 38,
            colors: [
            { color: "black", stock: 5 },
            { color: "white", stock: 8 },
            ],
        },
        {
            size: 40,
            colors: [
            { color: "black", stock: 3 },
            { color: "red", stock: 2 },
            { color: "white", stock: 10 },
            ],
        },
        {
            size: 42,
            colors: [
            { color: "black", stock: 7 },
            { color: "gray", stock: 4 },
            ],
        },
        {
            size: 44,
            colors: [
            { color: "white", stock: 6 },
            { color: "blue", stock: 1 },
            ],
        },
        ],
    },
    {
        id: 2,
        name: "ADIDAS SUPERNOVA",
        sizes: [
        {
            size: 39,
            colors: [
            { color: "gray", stock: 12 },
            { color: "blue", stock: 5 },
            ],
        },
        {
            size: 41,
            colors: [
            { color: "black", stock: 8 },
            { color: "white", stock: 9 },
            { color: "red", stock: 3 },
            ],
        },
        {
            size: 43,
            colors: [
            { color: "gray", stock: 6 },
            { color: "blue", stock: 7 },
            ],
        },
        {
            size: 45,
            colors: [
            { color: "black", stock: 4 },
            { color: "white", stock: 2 },
            ],
        },
        ],
    },
    {
        id: 3,
        name: "PUMA RACER",
        sizes: [
        {
            size: 38,
            colors: [
            { color: "red", stock: 15 },
            { color: "black", stock: 10 },
            ],
        },
        {
            size: 40,
            colors: [
            { color: "white", stock: 8 },
            { color: "blue", stock: 6 },
            ],
        },
        {
            size: 42,
            colors: [
            { color: "red", stock: 12 },
            { color: "gray", stock: 9 },
            ],
        },
        {
            size: 44,
            colors: [
            { color: "black", stock: 5 },
            { color: "white", stock: 7 },
            ],
        },
        ],
    },
    {
        id: 4,
        name: "NEW BALANCE 574",
        sizes: [
        {
            size: 39,
            colors: [
            { color: "blue", stock: 20 },
            { color: "gray", stock: 14 },
            ],
        },
        {
            size: 41,
            colors: [
            { color: "black", stock: 11 },
            { color: "white", stock: 13 },
            ],
        },
        {
            size: 43,
            colors: [
            { color: "blue", stock: 8 },
            { color: "red", stock: 4 },
            ],
        },
        {
            size: 45,
            colors: [
            { color: "gray", stock: 6 },
            { color: "black", stock: 9 },
            ],
        },
        ],
    },
    {
        id: 5,
        name: "ASICS GEL-KAYANO",
        sizes: [
        {
            size: 38,
            colors: [
            { color: "white", stock: 18 },
            { color: "black", stock: 12 },
            ],
        },
        {
            size: 40,
            colors: [
            { color: "blue", stock: 7 },
            { color: "gray", stock: 10 },
            ],
        },
        {
            size: 42,
            colors: [
            { color: "red", stock: 5 },
            { color: "white", stock: 9 },
            ],
        },
        {
            size: 44,
            colors: [
            { color: "black", stock: 3 },
            { color: "blue", stock: 6 },
            ],
        },
        ],
    },
    {
        id: 6,
        name: "REEBOK NANO",
        sizes: [
        {
            size: 39,
            colors: [
            { color: "black", stock: 7 },
            { color: "red", stock: 2 },
            ],
        },
        {
            size: 41,
            colors: [
            { color: "gray", stock: 8 },
            { color: "white", stock: 11 },
            ],
        },
        {
            size: 43,
            colors: [
            { color: "blue", stock: 9 },
            { color: "black", stock: 6 },
            ],
        },
        {
            size: 45,
            colors: [
            { color: "white", stock: 4 },
            { color: "gray", stock: 5 },
            ],
        },
        ],
    },
    {
        id: 7,
        name: "CONVERSE CHUCK",
        sizes: [
        {
            size: 38,
            colors: [
            { color: "white", stock: 25 },
            { color: "black", stock: 20 },
            ],
        },
        {
            size: 40,
            colors: [
            { color: "red", stock: 15 },
            { color: "blue", stock: 10 },
            ],
        },
        {
            size: 42,
            colors: [
            { color: "white", stock: 18 },
            { color: "gray", stock: 12 },
            ],
        },
        {
            size: 44,
            colors: [
            { color: "black", stock: 8 },
            { color: "red", stock: 5 },
            ],
        },
        ],
    },
    {
        id: 8,
        name: "VANS OLD SKOOL",
        sizes: [
        {
            size: 39,
            colors: [
            { color: "black", stock: 14 },
            { color: "white", stock: 16 },
            ],
        },
        {
            size: 41,
            colors: [
            { color: "gray", stock: 10 },
            { color: "blue", stock: 8 },
            ],
        },
        {
            size: 43,
            colors: [
            { color: "red", stock: 7 },
            { color: "black", stock: 9 },
            ],
        },
        {
            size: 45,
            colors: [
            { color: "white", stock: 6 },
            { color: "gray", stock: 4 },
            ],
        },
        ],
    },
];

const reducer = (state , action) => {

}   

export function ProductProvider({children}){
    const [products , dispatch] = useReducer(reducer , initialProducts);

    return(
        <ProductContext.Provider value={{products , dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}

