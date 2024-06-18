import { Api } from "../axios-config";

export const addProduct = async (product) => {
    try{
        const { data } = await Api.post('/lojas', product, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
        });
        
        if(data)
            return data;

    } catch (error) {
        console.error(error)
    }
};