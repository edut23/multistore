import { Api } from "../axios-config";

export const getStoreProducts = async () => {
    try{
        const { data } = await Api.get(`/lojas/produtos`);
        
        if(data)
            return data._embedded.produtos;
    } catch (error) {
        console.error(error)
    }
};