import { useEffect, useState } from "react";
import { getProductByID } from "../api/getProductById";

const useProduct = ({setPage, product, addToCart}) => {
    // Estado para armazenar a quantidade selecionada
    const [quantity, setQuantity] = useState(1);
    const [productInfo, setProductInfo] = useState({})

    /*const fetchProducts = async() => {
        console.log(product)
        try{
            const data = await getProductByID(product);
            setProductInfo(data);
            console.log(data)
        }
        catch(error){
            console.log(error)
        }
    }*/

    // Função para lidar com a adição do produto ao carrinho com a quantidade selecionada
    const handleAddToCart = () => {
        // Adiciona o produto ao carrinho com a quantidade selecionada
        addToCart({ ...product, quantity });
        // Redireciona para a página do carrinho após adicionar o produto
        setPage(5); // Redireciona para a página do carrinho
    };

    useEffect(() => {
        //fetchProducts();
    }, [product])

    return {
        productInfo,
        quantity,
        setQuantity,
        handleAddToCart
    }
}

export default useProduct;