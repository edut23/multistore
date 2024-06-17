import React from 'react';
import '../../App.css';
import Logo from '../../assets/multistoreLogo'; // Importação do componente de logo

const Menu = ({ setPage, userType, handleLogout }) => {
  const handleLogoClick = () => {
    setPage(2); // Redireciona para a página inicial (Home)
  };

  const handleLogoutAndRedirect = () => {
    handleLogout(); // Executa a função de logout
    setPage(2); // Redireciona para a página inicial (Home)
  };

  return (
    <div className="menu">
      <header className="menu-header">
        <div className="menu-logo" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <Logo /> {/* Componente de logo */}
          <h1>MULTISTORE-MASTER</h1> {/* Título da aplicação */}
        </div>
        <nav className="menu-nav">
          {/* Condicional para renderização dos botões com base no userType */}
          {userType === null ? (
            <button className="btn dftBlue" onClick={() => setPage(0)}>Login</button>
          ) : (
            <>
              {userType !== 'Cliente' && (
                <>
                  <button className="btn dftBlue" onClick={() => setPage(7)}>Pedidos</button>
                  <button className="btn dftBlue" onClick={() => setPage(4)}>Produtos</button>
                </>
              )}
              {userType !== 'Loja' && (
                <>
                  <button className="btn dftBlue" onClick={() => setPage(2)}>Home</button>
                  <button className="btn dftBlue" onClick={() => setPage(7)}>Pedidos</button>
                  <button className="btn dftBlue" onClick={() => setPage(5)}>Carrinho</button>
                </>
              )}
              <button className="btn dftBlue" onClick={handleLogoutAndRedirect}>Sair</button>
            </>
          )}
        </nav>
      </header>
    </div>
  );
};

export default Menu;
