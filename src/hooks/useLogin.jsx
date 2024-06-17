import { useState } from "react";
import useApp from "./useApp";
import { loginApi } from "../api/login";

const useLogin = ({ setUserType, setPage, setToken}) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handlePage = () => {
        setPage(1);
    }

    const login = async() => {
        try{
            const token = await loginApi(user, password);
            if(token){
                setToken(token?.token);
                setUserType(token?.role[0].authority);
                console.log(token?.role[0].authority)
                setPage(2);
            }
            else
                setError(true);
        }catch(error){
            setError(true);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login();
    }
      


    return{
        user,
        setUser,
        password,
        setPassword,
        handlePage,
        handleSubmit,
        error
    }
}

export default useLogin;