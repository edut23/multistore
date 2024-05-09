import React from "react";

const List = (props) => {
    return(
        <div className="form m-auto text-start p-1 container-lg">
            <h2>Usuários cadastrados:</h2>
            <table className="table">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Senha</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((user, idx) => (
                    <tr key={idx + 1}>
                        <td>{idx + 1}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default List;