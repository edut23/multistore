import React from "react";
import "./index.css"

const Login = (props) => {
    const handlePage = () =>{
        props.setPage(1)
    }
    
    return(
        <form className="form m-auto text-start p-1">
            <div className="mb-3 mt-1 container-sm">
                <label className="form-label">Usuário</label>
                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-3 container-sm">
                <label className="form-label">Senha</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="mb-2 container-sm d-grid gap-2 d-md-flex justify-content-md-end">
                <p onClick={() => handlePage()}>Cadastre-se</p>    
                <button type="submit" className="btn btn-primary">Entrar</button>
            </div>
        </form>
    )
}

export default Login;