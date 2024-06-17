import { Api } from "../axios-config";

export const getProductByID = async (id) => {
    try{
        const { data } = await Api.get(`/produtos/${id}`);
        
        if(data)
            return data;
    } catch (error) {
        console.error(error)
    }
};