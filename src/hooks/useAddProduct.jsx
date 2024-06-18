import { useEffect, useState } from "react";
import { addProduct } from "../api/addProduct";
import { toFormData } from "axios";

const useAddProducts = () => {
    const [product, setProduct] = useState({
        nome: "",
        descricao: "",
        preco: 0,
        imagens: []
    });

    const formData = new FormData();

    const handleFileChange = async (event) => {
        //const file = event.target.files[0];
        //const base64 = await toBase64(file);
        //console.log(file)
        setProduct({...product, imagens: [event]});
      };

    const toBase64 = file => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
      });

    const fetchProduct = async() => {
        
        await formData.append('nome', product.nome)
        await formData.append('descricao', product.descricao)
        await formData.append('preco', product.preco)
        await formData.append('imagens', product.imagens)
        console.log(product, formData)
        try{
            const response = await addProduct(formData);
            console.log(response);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        console.log(product)
    },[product])

    return {product, setProduct, formData, handleFileChange, fetchProduct}
}

export default useAddProducts;