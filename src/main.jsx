import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './store';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About.jsx';
import Products from './components/Products.jsx';
import Cart from './components/Cart.jsx';
import Order from './components/Order.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route index element={<Products />} />
            <Route path='Products' element={<Products />} />
            <Route path='About' element={<About />} />
            <Route path='Cart' element={<Cart />} />
            <Route path='Order' element={<Order />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
