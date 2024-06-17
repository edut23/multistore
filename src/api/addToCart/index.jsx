import { Api } from "../axios-config";

export const addToCart = async (id) => {
    try{
        const { data } = await Api.post(`/clientes/carrinho`, {id: id});
        
        if(data)
            return data;
    } catch (error) {
        console.error(error)
    }
};