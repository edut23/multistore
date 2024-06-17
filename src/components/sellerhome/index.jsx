import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../../App.css';

<h1>Teste</h1>
const HomePage = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://34.41.234.141/produtos?page=0&size=10&direction=asc');
        const fetchedProducts = response.data._embedded.produtos.map(product => ({
          id: product.id,
          name: product.nome,
          price: product.preco,
          image: product.imagens.length > 0 ? product.imagens[0]._links.download.href : 'placeholder.jpg',
          description: product.descricao,
        }));
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="home">
      <h2>Produtos</h2>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">R$ {product.price.toFixed(2)}</p>
              <button 
                className="btn dftBlue" 
                onClick={() => addToCart({...product, quantity: 1})}
              >
                Adicionar ao Carrinho
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
