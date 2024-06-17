import { useState, useEffect } from "react";
import { getProducts } from "../api/getProducts";

const useHome = ({setPage, setProduct}) => {
    const [products, setProducts] = useState([]);
    const [size, setSize] = useState(10);
    const [productPage, setProductPage] = useState(0);

    const fetchProducts = async () => {
        try {
            const data = await getProducts(productPage, size);
            const fetchedProducts = data._embedded.produtos.map(product => ({
                id: product.id,
                name: product.nome,
                price: product.preco,
                image: product.imagens.length > 0 ? product.imagens[0]._links.download.href : 'placeholder.jpg',
                description: product.descricao,
            }));
            setProducts(fetchedProducts);
        } catch (error) {
            console.error('Erro ao buscar produtos:', error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSelectProduct = (product) => {
        setProduct(product);
        setPage(9);
    }

    const handleEditProduct = (productId) => {
        setPage(3); // Redireciona para a página de edição de produtos
        // Aqui você pode passar o productId para a página de edição se necessário
    };

    return {
        products,
        setProducts,
        handleSelectProduct,
        handleEditProduct
    }
}

export default useHome;