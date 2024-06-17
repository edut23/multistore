import { Api } from "../axios-config";

export const getProducts = async (page, size) => {
    try{
        const { data } = await Api.get(`/produtos?page=${page}&size=${size}&direction=asc`);
        
        if(data)
            return data;
    } catch (error) {
        console.error(error)
    }
};