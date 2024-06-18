import { useEffect, useState } from "react";
import { getCart } from "../api/getCart";
import { postOrder } from "../api/postOrder";
import { deleteProduct } from "../api/deleteProduct";

const useCart = () => {
    const [cart, setCart] = useState([]);

    const fetchCart = async() => {
        try{
            const data = await getCart();
            setCart(data);
        }
        catch(error){
            console.log(error);
        }
    }

    const deleteItem = async(id) => {
        try{
            const response = await deleteProduct(id);
        }
        catch(error){
            console.log(error);
        }
    }

    const fetchOrder = async() => {
        try{
            const response = await postOrder();
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCart();
    },[])

    return {cart, fetchOrder, deleteItem}
}

export default useCart;