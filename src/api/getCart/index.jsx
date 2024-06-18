import { Api } from "../axios-config";

export const getCart = async (id) => {
    try{
        const { data } = await Api.get(`/clientes/carrinho`);
        
        if(data)
            return data;
    } catch (error) {
        console.error(error)
    }
};