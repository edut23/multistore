import React from "react";
import "../index.css";
import useSignup from "../../hooks/useSignup";

const Signup = (props) => {
  const {
    newData,
    setNewData,
    confirmEmail,
    setConfirmEmail,
    handlePage,
    handleSubmit,
    error,
    handleKeyPress
  } = useSignup(props);

  return (
    <form className="form m-auto text-start p-1 container-lg" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3 container-sm">
        <label className="form-label">Tipo de conta</label>
        <select 
          value={newData.role} 
          onKeyDown={handleKeyPress} 
          onChange={(e) => setNewData({...newData, role: e.target.value})} 
          className="form-control" 
          required
        >
          <option value="USER">Cliente</option>
          <option value="MANAGER">Loja</option>
        </select>
      </div>
      <div className="mb-3 container-sm">
        <label className="form-label">Usuário</label>
        <input 
          value={newData.user} 
          onKeyDown={handleKeyPress} 
          onChange={(e) => setNewData({...newData, user: e.target.value})} 
          type="text" 
          className="form-control" 
          required
        />
      </div>
      <div className="mb-3 container-sm">
        <label className="form-label">Senha</label>
        <input 
          value={newData.password} 
          onKeyDown={handleKeyPress} 
          onChange={(e) => setNewData({...newData, password: e.target.value})} 
          type="password" 
          className="form-control" 
          required
        />
      </div>
      <div className="mb-2 container-sm d-grid gap-2 d-md-flex justify-content-md-between">
        <button className="btn btn-link p-0 link" onClick={() => handlePage()}>Já tem cadastro? Faça o login!</button>      
        <button type="submit" onKeyDown={handleKeyPress} className="btn btn-primary dftBlue">Cadastrar</button>
      </div>
      {error && <p className="error">Erro ao cadastrar. Tente novamente.</p>}
    </form>
  );
}

export default Signup;
