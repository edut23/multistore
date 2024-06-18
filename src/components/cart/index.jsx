import React from 'react';
import useCart from '../../hooks/useCart';

const Cart = ({ setPage }) => {
  const {cart, fetchOrder, deleteItem} = useCart();

  return (
    <div className="container mt-5">
      <h1>Carrinho de Compras</h1>
      {cart?.itens?.length === 0 ? (
        <div>
          <p>O carrinho está vazio</p>
          <button className="btn btn-secondary" onClick={() => setPage(2)}>Voltar</button>
        </div>
      ) : (
        <div>
          {cart?.itens?.map((item, index) => (
            <div key={index}>
              <p>{item?.produto.nome}</p>
              <p>R$ {item?.produto.preco}</p>
              <p>Quantidade: {item?.quantidade}</p>
              {/*<button className="btn btn-primary" onClick={() => {deleteItem(item?.produto.id)}}>Remover produto</button>*/}
            </div>
          ))}
          <p>Total do carrinho: R$ {cart?.total}</p>
          <button className="btn btn-primary" onClick={() => {fetchOrder(); setPage(2)}}>Concluir pedido</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
