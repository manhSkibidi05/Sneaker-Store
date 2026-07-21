// src/App.jsx
import React from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext.jsx';
import Layout from './components/common/Layout.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx'


const App = () => {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path='about' element={<About/>}></Route>
            <Route path='contact' element={<Contact/>}></Route>
          </Route>
        </Routes>
      </ProductProvider>
    </BrowserRouter>
  )
};

export default App;