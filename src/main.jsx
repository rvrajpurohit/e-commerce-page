import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import { CartProvider } from './context/cart.jsx';
import './main.css'


ReactDOM.render(
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);

