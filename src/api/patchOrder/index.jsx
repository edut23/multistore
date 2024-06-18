import { Api } from "../axios-config";

export const patchOrder = async (codigo, status) => {
    try{
        const { data } = await Api.patch(`/pedidos`, {codigo: codigo, status: status});
        
        if(data)
            return data;
    } catch (error) {
        console.error(error)
    }
};