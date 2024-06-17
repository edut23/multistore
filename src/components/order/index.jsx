import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const OrderDetails = ({ setPage, product, addToCart }) => {
  // Estado para armazenar a quantidade selecionada
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Pedido não encontrado</div>;
  }

  // Função para lidar com a adição do produto ao carrinho com a quantidade selecionada
  const handleAddToCart = () => {
    // Aqui, você pode adicionar lógica para adicionar o pedido ao carrinho
    // Por exemplo, se addToCart ainda for necessário para pedidos
    // addToCart({ ...product, quantity });

    // Redirecionar para a página de pedidos ou outra ação desejada após adicionar o pedido
    setPage(5); // Exemplo: Redireciona para a página do carrinho
  };

  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={() => setPage(2)}>Voltar</button>
      <div className="row">
        {/* Exibição de detalhes do pedido */}
        <div className="col-md-6">
          <h1>Detalhes do Pedido</h1>
          <p>Número do Pedido: {product.id}</p>
          <p>Descrição: {product.description}</p>
          <p>Valor: R$ {product.price}</p>
          {/* Aqui, você pode exibir mais detalhes do pedido conforme necessário */}
        </div>
        {/* Exemplo de imagem do pedido */}
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
      </div>
      {/* Aqui, você pode adicionar um botão ou ações para lidar com o pedido, como "Confirmar Recebimento", etc. */}
      <div className="row mt-3">
        <div className="col-md-6">
          {/* Botão Adicionar ao Carrinho (simulado para pedidos, ajuste conforme necessário) */}
          <button className="btn btn-primary" onClick={handleAddToCart}>Adicionar ao Carrinho</button>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
