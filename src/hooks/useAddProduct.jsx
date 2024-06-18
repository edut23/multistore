import { useEffect, useState } from "react";
import { addProduct } from "../api/addProduct";
import { toFormData } from "axios";

const useAddProducts = () => {
    const [product, setProduct] = useState({
        nome: "",
        descricao: "",
        preco: 0,
    });

    const [imagens, setImagens] = useState();

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
        
        await formData.append('produto', JSON.stringify(product))
        await formData.append('imagens', imagens)
        try{
            const response = await addProduct(formData);
        }
        catch(error){
            console.log(error);
        }
    }

    return {product, setProduct, setImagens, formData, handleFileChange, fetchProduct}
}

export default useAddProducts;