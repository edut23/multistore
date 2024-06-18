import { useEffect, useState } from "react";
import { getOrder } from "../api/getOrder";
import { patchOrder } from "../api/patchOrder";

const useOrder = () => {
    const [orders, setOrders] = useState();

    const fetchOrder = async() => {
        try{
            const data = await getOrder();
            setOrders(data);
        }
        catch(error){
            console.log(error);
        }
    }

    const updateOrder = async(codigo, status) => {
        try{
            const response = await patchOrder(codigo, status);
            fetchOrder();
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        fetchOrder();
    },[])

    return {orders, updateOrder}
}

export default useOrder;