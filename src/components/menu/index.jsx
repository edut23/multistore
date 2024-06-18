import React from 'react';
import '../../App.css';
import Logo from '../../assets/multistoreLogo'; // Importação do componente de logo
import useMenu from '../../hooks/useMenu';

const Menu = ({ setPage, userType, handleLogout }) => {

  const {handleLogoClick, handleLogoutAndRedirect} = useMenu({setPage, handleLogout});

  return (
      <>
        <div className="menu-logo mb-2" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <Logo /> {/* Componente de logo */}
          <h1>MULTISTORE-MASTER</h1> {/* Título da aplicação */}
        </div>
        <nav className="menu-nav">
          {/* Condicional para renderização dos botões com base no userType */}
          {userType === null || userType === "null" || userType === "undefined" ? (
            <></>
          ) : (
            <>
              {userType === 'ROLE_USER' && (
                <>
                  <button className="btn dftBlue" onClick={() => setPage(2)}>Home</button>
                  <button className="btn dftBlue" onClick={() => setPage(7)}>Pedidos</button>
                  <button className="btn dftBlue" onClick={() => setPage(5)}>Carrinho</button>
                  <button className="btn dftBlue" onClick={() => setPage(8)}>Informações de usuário</button>
                </>
              )}
              {userType === 'ROLE_MANAGER' && (
                <>
                  
                  <button className="btn dftBlue" onClick={() => setPage(7)}>Pedidos</button>
                  <button className="btn dftBlue" onClick={() => setPage(4)}>Produtos</button>
                  <button className="btn dftBlue" onClick={() => setPage(8)}>Informações de usuário</button>
                </>
              )}
              <button className="btn btn-danger" onClick={handleLogoutAndRedirect}>Sair</button>
            </>
          )}
        </nav>
      </>
  );
};

export default Menu;
