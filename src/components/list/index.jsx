import React from "react";
import useList from "../../hooks/useList";

const List = (props) => {
  const {
    filter,
    setFilter,
    mainFilter,
    handlePage,
    remove
  } = useList(props);

  const handleProductClick = (product) => {
    window.history.pushState(null, '', `/product/${product.id}`);
    window.location.reload(); // Reload to trigger the new page render based on URL
  };

  return (
    <div className="form m-auto text-start p-2 container-lg">
      <div className="d-flex flex-row justify-content-between">
        <h2>Produtos:</h2>
        <button onClick={() => handlePage()} className="btn dftRed btn-sm">Sair</button>
      </div>
      <div className="list">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {mainFilter.map((product, index) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td className="text-end">
                  <button onClick={() => handleProductClick(product)} className="btn dftBlue btn-sm me-2">Ver Produto</button>
                  <button onClick={() => remove(index)} className="btn dftRed btn-sm">X</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="input-group mb-1 mt-2">
        <span className="input-group-text" id="basic-addon1">Pesquisar</span>
        <input value={filter} onChange={(e) => setFilter(e.target.value)} type="text" data-testid="filter" className="form-control" aria-label="Search" aria-describedby="basic-addon1" />
      </div>
      <button onClick={() => props.setPage(3)} className="btn btn-success mt-3">Cadastrar Produto</button>
    </div>
  )
}

export default List;
