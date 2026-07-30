// import ảnh vào 1 biến sẽ lưu trữ đường dẫn sau đó chỉ việc gọi và sử dụng 
import shoe11 from '../assets/shoe11.png'
import shoe21 from '../assets/shoe21.png'
import shoe31 from '../assets/shoe31.png'
import shoe41 from '../assets/shoe41.png'
import shoe51 from '../assets/shoe51.png'
import shoe61 from '../assets/shoe61.png'
import shoe71 from '../assets/shoe71.png'
import shoe81 from '../assets/shoe81.png'
import shoe12 from '../assets/shoe12.png'
import shoe22 from '../assets/shoe22.png'
import shoe32 from '../assets/shoe32.png'
import shoe42 from '../assets/shoe42.png'
import shoe52 from '../assets/shoe52.png'
import shoe62 from '../assets/shoe62.png'
import shoe72 from '../assets/shoe72.png'
import shoe82 from '../assets/shoe82.png'
import shoe13 from '../assets/shoe13.png'
import shoe23 from '../assets/shoe23.png'
import shoe33 from '../assets/shoe33.png'
import shoe43 from '../assets/shoe43.png'
import shoe53 from '../assets/shoe53.png'
import shoe63 from '../assets/shoe63.png'
import shoe73 from '../assets/shoe73.png'
import shoe83 from '../assets/shoe83.png'


// mảng sản phẩm lưu trữ arr và obj lồng nhau có các trường dữ liệu sau : 
// + tên , giá , ảnh , trang , mảng kích thước , màu sắc , số lượng còn lại 
export const products = [
    {
        id: 1,
        name: "NIKE DUNK LOW",
        price : 185,
        heading : 'Panda / For Sports',
        img : shoe11,
        img2 : shoe12,
        img3 : shoe13, 
        page : 1,
        variants: [
            { ver: '1v1', size: 38, color: "black", stock: 0 },
            { ver: '1v2', size: 38, color: "white", stock: 8 },
            { ver: '1v3', size: 40, color: "black", stock: 0 },
            { ver: '1v4', size: 40, color: "white", stock: 8 },
            { ver: '1v5', size: 42, color: "black", stock: 5 },
            { ver: '1v6', size: 42, color: "white", stock: 0 },
            { ver: '1v7', size: 44, color: "black", stock: 5 },
            { ver: '1v8', size: 44, color: "white", stock: 8 },
        ],
    },
    {
        id: 2,
        name: "AIR JORDAN 1",
        price : 285,
        heading : 'Mixing Color / Tech Mech',
        img : shoe21,
        img2 : shoe22,
        img3 : shoe23, 
        page : 1,
        variants: [
            { ver: '2v1', size: 39, color: "black", stock: 8 },
            { ver: '2v2', size: 39, color: "white", stock: 9 },
            { ver: '2v3', size: 39, color: "red", stock: 3 },
            { ver: '2v4', size: 41, color: "black", stock: 8 },
            { ver: '2v5', size: 41, color: "white", stock: 0 },
            { ver: '2v6', size: 41, color: "red", stock: 3 },
            { ver: '2v7', size: 43, color: "black", stock: 6 },
            { ver: '2v8', size: 43, color: "white", stock: 9 },
            { ver: '2v9', size: 43, color: "red", stock: 0 },
            { ver: '2v10', size: 45, color: "black", stock: 8 },
            { ver: '2v11', size: 45, color: "white", stock: 9 },
            { ver: '2v12', size: 45, color: "red", stock: 3 },
        ],
    },
    {
        id: 3,
        name: "VANS DAMIER",
        price : 385,
        heading : 'Caro Color / Amazing',
        img : shoe31,
        img2 : shoe32,
        img3 : shoe33, 
        page : 1,
        variants: [
            { ver: '3v1', size: 38, color: "white", stock: 8 },
            { ver: '3v2', size: 38, color: "blue", stock: 6 },
            { ver: '3v3', size: 40, color: "white", stock: 8 },
            { ver: '3v4', size: 40, color: "blue", stock: 6 },
            { ver: '3v5', size: 42, color: "white", stock: 0 },
            { ver: '3v6', size: 42, color: "blue", stock: 6 },
            { ver: '3v7', size: 44, color: "white", stock: 5 },
            { ver: '3v8', size: 44, color: "blue", stock: 0 },
        ],
    },
    {
        id: 4,
        name: "NEW BALANCE 878",
        price : 265,
        heading : 'Pure White / Full Grain',
        img : shoe41,
        img2 : shoe42,
        img3 : shoe43, 
        page : 1,
        variants: [
            { ver: '4v1', size: 39, color: "gray", stock: 6 },
            { ver: '4v2', size: 39, color: "white", stock: 13 },
            { ver: '4v3', size: 39, color: "black", stock: 9 },
            { ver: '4v4', size: 41, color: "gray", stock: 6 },
            { ver: '4v5', size: 41, color: "white", stock: 13 },
            { ver: '4v6', size: 41, color: "black", stock: 0 },
            { ver: '4v7', size: 43, color: "gray", stock: 0 },
            { ver: '4v8', size: 43, color: "white", stock: 13 },
            { ver: '4v9', size: 43, color: "black", stock: 9 },
            { ver: '4v10', size: 45, color: "gray", stock: 6 },
            { ver: '4v11', size: 45, color: "white", stock: 13 },
            { ver: '4v12', size: 45, color: "black", stock: 9 },
        ],
    },
    {
        id: 5,
        name: "ASICS GEL-KAYANO",
        price : 320,
        heading : 'Charcoal / Reflective',
        img : shoe51,
        img2 : shoe52,
        img3 : shoe53, 
        page : 1,
        variants: [
            { ver: '5v1', size: 38, color: "blue", stock: 7 },
            { ver: '5v2', size: 38, color: "gray", stock: 10 },
            { ver: '5v3', size: 38, color: "red", stock: 5 },
            { ver: '5v4', size: 40, color: "blue", stock: 7 },
            { ver: '5v5', size: 40, color: "gray", stock: 10 },
            { ver: '5v6', size: 40, color: "red", stock: 0 },
            { ver: '5v7', size: 42, color: "blue", stock: 0 },
            { ver: '5v8', size: 42, color: "gray", stock: 10 },
            { ver: '5v9', size: 42, color: "red", stock: 5 },
            { ver: '5v10', size: 44, color: "blue", stock: 7 },
            { ver: '5v11', size: 44, color: "gray", stock: 10 },
            { ver: '5v12', size: 44, color: "red", stock: 5 },
        ],
    },
    {
        id: 6,
        name: "NIKE DUNK LOW 2",
        price : 410,
        heading : 'Light Navy / Calfskin',
        img : shoe61,
        img2 : shoe62,
        img3 : shoe63, 
        page : 1,
        variants: [
            { ver:'6v1' , size: 38, color: "white", stock: 6 },
            { ver:'6v2' , size: 38, color: "blue", stock: 0 },
            { ver:'6v3' , size: 42, color: "white", stock: 0 },
            { ver:'6v4' , size: 42, color: "blue", stock: 0 },
            { ver:'6v5' , size: 43, color: "white", stock: 6 },
            { ver:'6v6' , size: 43, color: "blue", stock: 4 },
            { ver:'6v7' , size: 45, color: "white", stock: 6 },
            { ver:'6v8' , size: 45, color: "blue", stock: 4 },
        ],
    },
    {
        id: 7,
        name: "CONVERSE CHUCK LOW",
        price : 125,
        heading : 'Vintage Vibe / All Star',
        img : shoe71,
        img2 : shoe72,
        img3 : shoe73, 
        page : 2,
        variants: [
            { ver:'7v1' , size: 37, color: "black", stock: 6 },
            { ver:'7v2' , size: 37, color: "blue", stock: 0 },
            { ver:'7v3' , size: 40, color: "black", stock: 0 },
            { ver:'7v4' , size: 40, color: "blue", stock: 0 },
            { ver:'7v5' , size: 43, color: "black", stock: 6 },
            { ver:'7v6' , size: 43, color: "blue", stock: 4 },
            { ver:'7v7' , size: 45, color: "black", stock: 6 },
            { ver:'7v8' , size: 45, color: "blue", stock: 4 },
        ],
    },
    {
        id: 8,
        name: "CONVERSE CHUCK HIGH",
        price : 290,
        heading : 'Vintage Vibe / Deep Brown',
        img : shoe81,
        img2 : shoe82,
        img3 : shoe83, 
        page : 2,
        variants: [
            { ver:'8v1' , size: 39, color: "white", stock: 6 },
            { ver:'8v2' , size: 39, color: "gray", stock: 0 },
            { ver:'8v3' , size: 41, color: "white", stock: 0 },
            { ver:'8v4' , size: 41, color: "gray", stock: 0 },
            { ver:'8v5' , size: 43, color: "white", stock: 6 },
            { ver:'8v6' , size: 43, color: "gray", stock: 4 },
            { ver:'8v7' , size: 45, color: "white", stock: 6 },
            { ver:'8v8' , size: 45, color: "gray", stock: 4 },
        ],
    },
];