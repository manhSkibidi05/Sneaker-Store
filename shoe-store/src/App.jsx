// src/App.jsx
import React from 'react';
import {BrowserRouter , Routes , Route } from 'react-router-dom';
import Layout from './components/common/Layout.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Layout></Layout>
    </BrowserRouter>
  )
};

export default App;