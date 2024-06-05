import { Api } from "../axios-config";

export const loginApi = async (username, password) => {
    try{
        const { data } = await Api.post('/auth/login', {username: username, password: password});
        console.log(data, data.token)
        
        if(data)
            return data.token;

    } catch (error) {
        console.error(error)
    }
};