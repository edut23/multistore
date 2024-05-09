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
        error
    } = useSignup(props);

    return(
        <form className="form m-auto text-start p-1 container-lg" onSubmit={(e) => handleSubmit(e)}>
            <div className="mb-3 mt-1 container-sm">
                <label className="form-label">Nome</label>
                <input value={newData.name} onChange={(e) => setNewData({...newData, name: e.target.value})} type="text" className="form-control" id="name" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3 container-sm">
                <label className="form-label">Usuário</label>
                <input value={newData.user}  onChange={(e) => setNewData({...newData, user: e.target.value})} type="text" className="form-control" id="user" required/>
            </div>
            <div className="mb-3 mt-1 container-sm">
                <label className="form-label">Email</label>
                <input value={newData.email}  onChange={(e) => setNewData({...newData, email: e.target.value})} type="email" className="form-control" id="email" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3 mt-1 container-sm">
                <label className="form-label">Confirmar Email</label>
                <input value={confirmEmail}  onChange={(e) => setConfirmEmail(e.target.value)} type="email" className="form-control" id="confirmEmail" aria-describedby="emailHelp" required/>
                {error && 
                    <p className="error">O Email deve ser idêntico ao anterior.</p>}
            </div>
            <div className="mb-3 container-sm">
                <label className="form-label">Senha</label>
                <input value={newData.password}  onChange={(e) => setNewData({...newData, password: e.target.value})} type="password" className="form-control" id="password" required/>
            </div>
            <div className="mb-2 container-sm d-grid gap-2 d-md-flex justify-content-md-between">
                <button className="btn btn-link p-0 link" onClick={() => handlePage()}>Já tem cadastro? Faça o login!</button>      
                <button type="submit" className="btn btn-primary dftBlue">Cadastrar</button>
            </div>
        </form>
    )
}

export default Signup;