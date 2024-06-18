import { Api } from "../axios-config";

export const getOrder = async () => {
    try{
        const { data } = await Api.get(`/pedidos`);
        
        if(data)
            return data;
    } catch (error) {
        console.error(error)
    }
};