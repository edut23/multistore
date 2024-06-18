import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';
import useHome from '../../hooks/useHome';

const HomePage = ({ addToCart, userType, setPage, setProduct }) => {
  
  const {products, handleEditProduct} = useHome(setPage, setProduct);
  console.log(products)

  return (
    <div className="home">
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} style={{height: "55%"}} alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">R$ {product.price.toFixed(2)}</p>
              <button 
                className="btn dftBlue mb-1"
                onClick={() => {setProduct(product); setPage(9)}}
              >
                Ver produto
              </button>
              {userType === 'ROLE_USER' ? (
                <button 
                  className="btn dftBlue" 
                  onClick={() => addToCart(product.id)}
                >
                  Adicionar ao Carrinho
                </button>
              ) :
               (
                <button 
                  className="btn dftBlue" 
                  onClick={() => handleEditProduct(product.id)}
                >
                  Editar Produto
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
