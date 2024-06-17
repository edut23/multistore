import React from "react";
import "../index.css";
import useSignup from "../../hooks/useSignup";
import useInfos from "../../hooks/useInfos";

const Infos = ({userType, setPage, setData}) => {
  const {
    newData,
    setNewData,
    confirmEmail,
    setConfirmEmail,
    handlePage,
    handleSubmit,
    error,
    handleKeyPress
  } = useInfos({userType, setPage, setData});

  return (
    <form className="form m-auto text-start p-1 container-lg" onSubmit={(e) => handleSubmit(e)}>
      <div className="mb-3 container-sm">
        <label className="form-label">Usuário</label>
        <input 
          value={newData.username} 
          onKeyDown={handleKeyPress} 
          onChange={(e) => setNewData({...newData, username: e.target.value})} 
          type="text" 
          className="form-control" 
          required
        />
      </div>
      <div className="mb-3 container-sm">
        <label className="form-label">Email</label>
        <input 
          value={newData.email} 
          onKeyDown={handleKeyPress} 
          onChange={(e) => setNewData({...newData, email: e.target.value})} 
          type="email" 
          className="form-control" 
          required
        />
      </div>
      <div className="mb-3 container-sm">
        <label className="form-label">Telefone</label>
        <input 
          value={newData.telefone} 
          onKeyDown={handleKeyPress} 
          onChange={(e) => setNewData({...newData, telefone: e.target.value.replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{4})(\d{4})(\d)/, "$1-$2")})} 
          type="tel" 
          className="form-control" 
          required
        />
      </div>
      <div className="mb-3 container-sm">
        <label className="form-label">Endereço</label>
        <input 
          value={newData.endereco} 
          onKeyDown={handleKeyPress} 
          onChange={(e) => setNewData({...newData, endereco: e.target.value})} 
          type="text" 
          className="form-control" 
          required
        />
      </div>
      <div className="mb-3 container-sm">
        <label className="form-label">Nome</label>
        <input 
          value={newData.nome} 
          onKeyDown={handleKeyPress} 
          onChange={(e) => setNewData({...newData, nome: e.target.value})} 
          type="text" 
          className="form-control" 
          required
        />
      </div>
      <div className="mb-3 container-sm">
        <label className="form-label">Sobrenome</label>
        <input 
          value={newData.sobrenome} 
          onKeyDown={handleKeyPress} 
          onChange={(e) => setNewData({...newData, sobrenome: e.target.value})} 
          type="text" 
          className="form-control" 
          required
        />
      </div>
      {userType === "ROLE_USER" ? 
      <>
        <div className="mb-3 container-sm">
          <label className="form-label">CPF</label>
          <input 
            value={newData.CPF} 
            onKeyDown={handleKeyPress} 
            onChange={(e) => setNewData({...newData, CPF: e.target.value.replace(/\D/g, '')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d{1,2})/, '$1-$2')
              .replace(/(-\d{2})\d+?$/, '$1')})} 
            type="text" 
            className="form-control" 
            required
          />
        </div>
        <div className="mb-3 container-sm">
          <label className="form-label">Data de Nascimento</label>
          <input 
            value={newData.dataNasc} 
            onKeyDown={handleKeyPress} 
            onChange={(e) => setNewData({...newData, dataNasc: e.target.value})} 
            type="date" 
            className="form-control" 
            required
          />
        </div>
        <div className="mb-3 container-sm">
          <label className="form-label">Gênero</label>
          <select 
            value={newData.genero} 
            onKeyDown={handleKeyPress} 
            onChange={(e) => setNewData({...newData, genero: e.target.value})} 
            className="form-control" 
            required
          >
            <option value="HOMEM">Homem</option>
            <option value="MULHER">Mulher</option>
            <option value="NB">Não-binário</option>
          </select>
        </div>
      </>

      :

      <>
        <div className="mb-3 container-sm">
          <label className="form-label">CNPJ</label>
          <input 
            value={newData.CNPJ} 
            onKeyDown={handleKeyPress} 
            onChange={(e) => setNewData({...newData, CNPJ: e.target.value.replace(/\D+/g, '')
              .replace(/(\d{2})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d)/, '$1.$2')
              .replace(/(\d{3})(\d)/, '$1/$2')
              .replace(/(\d{4})(\d)/, '$1-$2')
              .replace(/(-\d{2})\d+?$/, '$1')})} 
            type="text" 
            className="form-control" 
            required
          />
        </div>
        <div className="mb-3 container-sm">
          <label className="form-label">Descrição</label>
          <input 
            value={newData.descricao} 
            onKeyDown={handleKeyPress} 
            onChange={(e) => setNewData({...newData, descricao: e.target.value})} 
            type="text" 
            className="form-control" 
            required
          />
        </div>
      </>
      }
      <div className="mb-2 container-sm d-grid gap-2 d-md-flex justify-content-md-between">
        <button className="btn btn-link p-0 link" onClick={() => handlePage()}>Já tem cadastro? Faça o login!</button>      
        <button type="submit" onKeyDown={handleKeyPress} className="btn btn-primary dftBlue">Cadastrar</button>
      </div>
      {error && <p className="error">Erro ao cadastrar. Tente novamente.</p>}
    </form>
  );
}

export default Infos;