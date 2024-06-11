import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fontsource/montserrat/400.css';
import Login from './components/login';
import Signup from './components/signup';
import Logo from './assets/multistoreLogo';
import List from './components/list';
import Product from './components/product';
import AddProduct from './components/addproduct';
import Payment from './components/payment';
import Cart from './components/cart';
import Menu from './components/menu';
import useApp from './hooks/useApp';


function App() {
  const { page, setPage, data, setData } = useApp();
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const getProductIdFromURL = () => {
    const url = window.location.pathname;
    const match = url.match(/\/product\/(\d+)/);
    return match ? parseInt(match[1]) : null;
  };

  const productId = getProductIdFromURL();
  const productData = data.find((product) => product.id === productId);

  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>
      <main className="main">
        {page === 0 && <Login setPage={setPage} data={data} />}
        {page === 1 && <Signup setPage={setPage} setData={setData} />}
        {page === 2 && <Menu setPage={setPage} />}
        {page === 3 && <AddProduct setPage={setPage} setData={setData} data={data} />}
        {page === 4 && <List setPage={setPage} data={data} setData={setData} />}
        {page === 5 && <Cart setPage={setPage} cartItems={cartItems} />}
        {page === 6 && <Payment setPage={setPage} cartItems={cartItems} />}
        {productId !== null && <Product setPage={setPage} product={productData} addToCart={addToCart} />}

      </main> 
    </div>
  );
}

export default App;