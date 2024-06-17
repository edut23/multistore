import React from 'react';
import '../../App.css';
import useLogin from "../../hooks/useLogin";

const Login = ({ setUserType, setPage }) => {
  const {
    user,
    setUser,
    password,
    setPassword,
    handlePage,
    handleSubmit,
    error,
    accountType,
    setAccountType,
    isLoggedIn,
  } = useLogin({ setUserType, setPage });

  const renderSuccessMessage = () => {
    const handleVerProdutosClick = () => {
      setPage(2); // Redireciona para a HomePage
    };

    if (isLoggedIn) {
      if (accountType === "Loja") {
        return (
          <div className="success-message">
            <p>Autenticação bem sucedida</p>
            <p>Bem-Vindo Lojista!</p>
          </div>
        );
      } else {
        return (
          <div className="success-message">
            <p>Autenticação bem sucedida</p>
            <p>Bem-Vindo {user}!</p>
            <button className="btn dftBlue" onClick={handleVerProdutosClick}>
              Ver Produtos
            </button>
          </div>
        );
      }
    }

    return null;
  };

  return (
    <div className="login-container">
      {!isLoggedIn ? (
        <form onSubmit={handleSubmit} className="mb-3 mt-1 container-sm">
          <div className="mb-3 mt-1 container-sm">
            <label className="form-label">Tipo de Conta</label>
            <select
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              className="form-select"
              required
            >
              <option value="Cliente">Cliente</option>
              <option value="Loja">Loja</option>
            </select>
          </div>
          <div className="mb-3 mt-1 container-sm">
            <label className="form-label">Usuário</label>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              type="text"
              className="form-control"
              required
            />
          </div>
          <div className="mb-3 container-sm">
            <label className="form-label">Senha</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              required
            />
            {error && <p className="error">Usuário e/ou senha inválido.</p>}
          </div>
          <div className="mb-2 container-sm d-grid gap-2 d-md-flex justify-content-md-between">
            <button
              type="button"
              className="btn btn-link p-0 link"
              onClick={() => handlePage()}
            >
              Primeira vez no site? Cadastre-se!
            </button>
            <button type="submit" className="btn btn-primary dftBlue">
              Entrar
            </button>
          </div>
        </form>
      ) : (
        <div className="login-success">
          {renderSuccessMessage()}
        </div>
      )}
    </div>
  );
};

export default Login;
