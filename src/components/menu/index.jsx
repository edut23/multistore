import React from 'react';

const Menu = ({ setPage }) => {
  return (
    <div>
      <h1>MENU</h1>
      {/* Botões de navegação */}
      <button className="btn btn-primary" onClick={() => setPage(3)}>Adicionar Produto</button>
      <button className="btn btn-primary" onClick={() => setPage(4)}>Ver Produtos</button>
      <button className="btn btn-primary" onClick={() => setPage(5)}>Carrinho</button>
    </div>
  );
};

export default Menu;
