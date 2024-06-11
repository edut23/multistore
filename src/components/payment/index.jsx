import React, { useState } from 'react';

const Payment = ({ setPage, cartItems}) => {
  const [discountCode, setDiscountCode] = useState('');
  const [shippingZip, setShippingZip] = useState('');

  const calculateTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };

  const total = calculateTotal();
  
  // Função para calcular o frete
  const calculateShipping = () => {
    // Implementar aqui a lógica para calcular o frete com base no CEP
  };

  return (
    <div>
      <h1>Resumo do Pedido</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} - Quantidade: {item.quantity} - Preço unitário: R$ {item.price}
          </li>
        ))}
      </ul>
      <h2>Total: R$ {total}</h2>
      <input type="text" placeholder="Digite o código de desconto" value={discountCode} onChange={(e) => setDiscountCode(e.target.value)} />
      <input type="text" placeholder="Digite o CEP" value={shippingZip} onChange={(e) => setShippingZip(e.target.value)} />
      <button onClick={calculateShipping}>Calcular Frete</button>
      <button>Finalizar Compra</button>
      <button onClick={() => setPage(2)}>Voltar</button>
    </div>
  );
};

export default Payment;
