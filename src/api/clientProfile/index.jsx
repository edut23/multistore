import { Api } from "../axios-config";

export const clientProfileAPI = async () => {
    try{
        const { data } = await Api.get('/clientes/profile');
        
        if(data)
            return data;

    } catch (error) {
        console.error(error)
    }
};