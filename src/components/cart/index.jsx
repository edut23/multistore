import React from 'react';

const Cart = ({ setPage, cartItems }) => {
  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const total = calculateTotal();

  return (
    <div className="container mt-5">
      <h1>Carrinho de Compras</h1>
      {cartItems.length === 0 ? (
        <div>
          <p>O carrinho está vazio</p>
          <button className="btn btn-secondary" onClick={() => setPage(2)}>Voltar</button>
        </div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={index}>
              <p>{item.name}</p>
              <p>{item.price}</p>
              <p>{item.quantity}</p>
            </div>
          ))}
          <p>Total: R$ {total}</p>
          <button className="btn btn-primary" onClick={() => setPage(6)}>Ir para o Pagamento</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
