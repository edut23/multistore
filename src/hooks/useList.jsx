import { useEffect, useState } from "react"
import { getStoreProducts } from "../api/getStoreProducts";
import { deleteStoreProduct } from "../api/deleteStoreProduct";

const useList = ({setPage, data, setData}) => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        try{
            const data = await getStoreProducts();
            setProducts(data)
        }
        catch(error){
            console.log(error)
        }
    }

    const deleteItem = async(id) => {
        try{
            const response = await deleteStoreProduct(id)
            console.log(response);
            fetchProducts();
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    return{
        products,
        deleteItem
    }
}

export default useList;