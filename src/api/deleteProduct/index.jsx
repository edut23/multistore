import { Api } from "../axios-config";

export const deleteProduct = async (id) => {
    try{
        const { data } = await Api.delete(`/clientes/carrinho`, {id: id});
        
        if(data)
            return data;
    } catch (error) {
        console.error(error)
    }
};