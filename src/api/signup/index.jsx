import { Api } from "../axios-config";

export const signupApi = async (username, password, role) => {
    try{
        const { data } = await Api.post('/auth/register', {username: username, password: password, role: role});
        console.log(data, data.token)
        
        if(data)
            return data.token;

    } catch (error) {
        console.error(error)
    }
};