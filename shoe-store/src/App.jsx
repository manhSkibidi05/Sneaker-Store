// src/App.jsx
import React from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './components/common/Layout.jsx';
import Home from './pages/Home.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route to='/' element={<Layout/>}>
          <Route index element={<Home/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;