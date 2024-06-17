import { Api } from "../axios-config";

export const storeProfileAPI = async () => {
    try{
        const { data } = await Api.get('/lojas/profile');
        
        if(data)
            return data;

    } catch (error) {
        console.error(error)
    }
};