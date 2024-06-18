import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import useOrder from '../../hooks/useOrder';

const OrderDetails = ({ setPage, product, addToCart }) => {
  const {orders, updateOrder} = useOrder();

  if (orders?.length < 1) {
    return <div>Pedido não encontrado</div>;
  }

  return (
    <div className="container mt-5">
      <button className="btn btn-secondary mb-3" onClick={() => setPage(2)}>Voltar</button>
      {orders?.map((order) => (
        <>
          <div key={order.codigo} className="row">
            {/* Exibição de detalhes do pedido */}
            <div className="col-md-6">
              <h1>Detalhes do Pedido</h1>
              <p>Número do Pedido: {order.codigo}</p>
              <p>Loja: {order.loja.nome}</p>
              <p>Cliente: {order?.cliente?.nome + " " + order?.cliente?.sobrenome}</p>
              <p>Data do pedido: {order.timestamp}</p>
              <p>Status: {order.status}</p>
              <p>Valor: R$ {order.total}</p>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-6">
              {/* Botão Adicionar ao Carrinho (simulado para pedidos, ajuste conforme necessário) */}
              {order.status === "PENDENTE" && 
                <button className="btn btn-primary" onClick={() => updateOrder(order.codigo, "CANCELADO")}>Cancelar pedido</button>}
              {order.status === "EM_PROGRESSO" && 
                <button className="btn btn-primary" onClick={() => updateOrder(order.codigo, "CONCLUIDO")}>Confirmar entrega</button>}
            </div>
          </div>
        </>
      ))}   
    </div>
  );
};

export default OrderDetails;
