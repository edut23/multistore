import { Api } from "../axios-config";

export const postOrder = async () => {
    try{
        const { data } = await Api.delete(`/pedidos`);
        
        if(data)
            return data;
    } catch (error) {
        console.error(error)
    }
};