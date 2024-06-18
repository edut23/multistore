import { Api } from "../axios-config";

export const deleteStoreProduct = async (id) => {
    try{
        const { data } = await Api.delete(`/produtos`, {id: id}, 
            {
                Headers: {
                    'Content-type': 'application/json'
                }
            }
        );
        
        if(data)
            return data;
    } catch (error) {
        console.error(error)
    }
};