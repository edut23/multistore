import { Api } from "../axios-config";

export const loginApi = async (username, password) => {
    try{
        const { data } = await Api.post('/auth/login', {username: username, password: password});
        
        if(data)
            return data;

    } catch (error) {
        console.error(error)
    }
};