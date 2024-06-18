import React from "react";
import useList from "../../hooks/useList";

const List = (props) => {
  const {
    products,
    deleteItem
  } = useList(props);

  return (
    <div className="form m-auto text-start p-2 container-lg">
      <div className="d-flex flex-row justify-content-between">
        <h2>Produtos listados:</h2>
      </div>
      <div className="list">
        <table className="table table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Descrição</th>
              {/*<th />*/}
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nome}</td>
                <td>{product.descricao}</td>
                {/*<td className="text-end">
                  <button onClick={() => handleProductClick(product)} className="btn dftBlue btn-sm me-2">Ver Produto</button>
                  <button onClick={() => deleteItem(product.id)} className="btn dftRed btn-sm">X</button>
                </td>*/}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={() => props.setPage(3)} className="btn btn-success mt-3">Cadastrar Produto</button>
    </div>
  )
}

export default List;
