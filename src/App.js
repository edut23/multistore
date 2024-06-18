import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '@fontsource/montserrat/400.css';
import Login from './components/login';
import Signup from './components/signup';
import List from './components/productList';
import Product from './components/product';
import AddProduct from './components/addproduct';
import Payment from './components/payment';
import Cart from './components/cart';
import Menu from './components/menu';
import HomePage from './components/home';
import OrderDetails from './components/order';
import useApp from './hooks/useApp';
import Infos from './components/infos';

function App() {
  const { page, setPage, data, setData, product, setProduct, setToken, userType, setUserType, locked, handleLogout, addProductToCart } = useApp();
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar produtos ao carrinho
  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, product]);
    }
  };

  // Função para obter o ID do produto da URL
  const getProductIdFromURL = () => {
    const url = window.location.pathname;
    const match = url.match(/\/product\/(\d+)/);
    return match ? parseInt(match[1]) : null;
  };

  // Encontrar dados do produto correspondente ao ID
  const productData = data.find((product) => product.id === product.id);

  return (
    <div className="App">
      <header className="App-header">
        <Menu setPage={setPage} userType={userType} handleLogout={handleLogout} />
      </header>
      <main className="main">
        {locked ? <>
        {page === 0 && <Login setPage={setPage} setUserType={setUserType} setToken={setToken} />}
        {page === 1 && <Signup setPage={setPage} setData={setData} />}</> : <>
        {page === 2 && <HomePage setPage={setPage} userType={userType} setData={setData} setProduct={setProduct} addToCart={addProductToCart} />}
        {page === 3 && <AddProduct setPage={setPage} setData={setData} data={data} />}
        {page === 4 && <List setPage={setPage} data={data} setData={setData} />}
        {page === 5 && <Cart setPage={setPage} cartItems={cartItems} />}
        {page === 6 && <Payment setPage={setPage} cartItems={cartItems} />}
        {page === 7 && <OrderDetails setPage={setPage} product={productData} addToCart={addToCart} />}
        {page === 8 && <Infos userType={userType} setPage={setPage} setData={setData} />}
        {page === 9 && product !== null && <Product setPage={setPage} product={product} addToCart={addProductToCart} />}</>}
      </main>
    </div>
  );
}

export default App;
