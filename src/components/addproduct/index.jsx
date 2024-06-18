import React, { useState } from 'react';
import useAddProducts from '../../hooks/useAddProduct';

const AddProduct = ({ setPage, setData, data }) => {
  const {product, setProduct, setImagens, handleFileChange, fetchProduct} = useAddProducts();

  return (
    <div className="container mt-5">
      <h2>Cadastrar Produto</h2>
      <form>
        <div className="mb-3">
          <label className="form-label">Nome</label>
          <input type="text" className="form-control" value={product?.nome} onChange={(e) => setProduct({...product, nome: e.target.value})} />
        </div>
        <div className="mb-3">
          <label className="form-label">Descrição</label>
          <textarea className="form-control" value={product?.descricao} onChange={(e) => setProduct({...product, descricao: e.target.value})} />
        </div>
        <div className="mb-3">
          <label className="form-label">Preço</label>
          <input type="number" className="form-control" value={product?.preco} onChange={(e) => setProduct({...product, preco: e.target.value})} />
        </div>
        <div className="mb-3">
          <label className="form-label">URL da Imagem</label>
          <input type="file" name="arquivos" class="btn btn-success"  accept="image/png, image/jpeg"  multiple className="form-control" onChange={(e) => setImagens(e.target.files[0])} />
        </div>
        <button type="button" className="btn btn-primary" onClick={() => fetchProduct()}>Adicionar Produto</button>
      </form>
    </div>
  );
};

export default AddProduct;
