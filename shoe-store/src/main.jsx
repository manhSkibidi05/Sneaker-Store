import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext.jsx'
import { FilterProvider } from './contexts/FilterContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { CartUIProvider } from './contexts/CartUIContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ProductProvider>
        <FilterProvider>
          <CartProvider>
            <CartUIProvider>
            <App />
            </CartUIProvider>
          </CartProvider>
        </FilterProvider>
      </ProductProvider>
    </BrowserRouter>
)
