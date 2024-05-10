import React from "react";
import useList from "../../hooks/useList";

const List = (props) => {

    const{
        filter,
        setFilter,
        mainFilter,
        handlePage,
        remove
    } = useList(props);

    return(
        <div className="form m-auto text-start p-2 container-lg">
            <div className="d-flex flex-row justify-content-between">
                <h2>Cadastros:</h2>
                <button onClick={() => handlePage()} className="btn exit btn-sm">Sair</button>
            </div>
            <div className="list">
            <table className="table table-sm">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th/>
                    </tr>
                </thead>
                <tbody>
                    {mainFilter.map((user, index) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td onClick={() => remove(index)} className="text-end">
                            <button className="btn dftRed btn-sm ms-auto">X</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>
            </div>
            <div className="input-group mb-1 mt-2">
                <span className="input-group-text" id="basic-addon1">Pesquisar</span>
                <input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" data-testid="filter" className="form-control" aria-label="Search" aria-describedby="basic-addon1"/>
            </div>
        </div>
    )
}

export default List;