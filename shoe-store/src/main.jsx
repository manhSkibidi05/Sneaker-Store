import { BrowserRouter } from 'react-router-dom'
import { ProductProvider } from './contexts/ProductContext.jsx'
import { FilterProvider } from './contexts/FilterContext.jsx'
import { CartUIProvider } from './contexts/CartUIContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ProductProvider>
        <FilterProvider>
          <CartUIProvider>
            <App />
          </CartUIProvider>
        </FilterProvider>
      </ProductProvider>
    </BrowserRouter>
)
