import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import useProduct from '../../hooks/useProduct';

const Product = ({ setPage, product, addToCart }) => {
  const {productInfo, quantity, setQuantity, handleAddToCart} = useProduct(setPage, product, addToCart);


  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={() => setPage(2)}>Voltar</button>
      <div className="row">
        <div className="col-md-6">
          <img src={product?.image} alt={product?.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product?.name}</h1>
          <p>{product?.description}</p>
          <h2>{product?.price}</h2>
          {/* Seletor de quantidade */}
          <select className="form-select mb-3" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
            {[...Array(10).keys()].map((value) => (
              <option key={value + 1} value={value + 1}>{value + 1}</option>
            ))}
          </select>
          {/* Botão Adicionar ao Carrinho */}
          <button className="btn btn-primary" onClick={() => addToCart(product.id)}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
