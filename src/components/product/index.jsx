import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Product = ({ setPage, product, addToCart }) => {
  // Estado para armazenar a quantidade selecionada
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Produto não encontrado</div>;
  }

  // Função para lidar com a adição do produto ao carrinho com a quantidade selecionada
  const handleAddToCart = () => {
    // Adiciona o produto ao carrinho com a quantidade selecionada
    addToCart({ ...product, quantity });
    // Redireciona para a página do carrinho após adicionar o produto
    setPage(5); // Redireciona para a página do carrinho
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={() => setPage(2)}>Voltar</button>
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <h2>{product.price}</h2>
          {/* Seletor de quantidade */}
          <select className="form-select mb-3" value={quantity} onChange={(e) => setQuantity(parseInt(e.target.value))}>
            {[...Array(10).keys()].map((value) => (
              <option key={value + 1} value={value + 1}>{value + 1}</option>
            ))}
          </select>
          {/* Botão Adicionar ao Carrinho */}
          <button className="btn btn-primary" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
