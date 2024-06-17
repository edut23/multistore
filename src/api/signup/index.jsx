import { Api } from "../axios-config";

export const signupApi = async (username, password, role) => {
    try{
        const { data } = await Api.post('/auth/register', {username: username, password: password, role: role});
        
        if(data)
            return data;

    } catch (error) {
        console.error(error)
    }
};