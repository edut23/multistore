import React, { useState } from 'react';

const AddProduct = ({ setPage, setData, data }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const handleAddProduct = () => {
    const newProduct = {
      id: data.length + 1,
      name,
      description,
      price,
      image
    };
    setData([...data, newProduct]);
    setPage(2); // Redirecionar para a página de listagem de produtos
  };

  return (
    <div className="container mt-5">
      <h2>Cadastrar Produto</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <textarea className="form-control" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Preço</label>
          <input type="text" className="form-control" value={price} onChange={(e) => setPrice(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">URL da Imagem</label>
          <input type="text" className="form-control" value={image} onChange={(e) => setImage(e.target.value)} />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleAddProduct}>Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AddProduct;
