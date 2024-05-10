import React from "react";
import "../index.css";
import useLogin from "../../hooks/useLogin";

const Login = (props) => {
    const {
        user,
        setUser,
        password,
        setPassword,
        handlePage,
        handleSubmit,
        error
    } = useLogin(props);
    
    return(
        <form onSubmit={(e) => handleSubmit(e)} className="form m-auto text-start p-1 container-lg">
            <div className="mb-3 mt-1 container-sm">
                <label label="Usuário" className="form-label">Usuário</label>
                <input value={user} data-testid="user" onChange={(e) => setUser(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required/>
            </div>
            <div className="mb-3 container-sm">
                <label className="form-label">Senha</label>
                <input value={password} data-testid="password" onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" required/>
                {error && <p data-testid="error" className="error">Usuário e/ou senha inválido.</p>}
            </div>
            <div className="mb-2 container-sm d-grid gap-2 d-md-flex justify-content-md-between">
                <button type="button" className="btn btn-link p-0 link" onClick={() => handlePage()}>Primeira vez no site? Cadastre-se!</button>      
                <button type="submit" className="btn btn-primary dftBlue">Entrar</button>
            </div>
        </form>
    )
}

export default Login;