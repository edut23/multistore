import { useState } from "react";
import useApp from "./useApp";
import { loginApi } from "../api/login";

const useLogin = ({ setUserType, setPage}) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const {setToken} = useApp();

    const handlePage = () => {
        setPage(1);
    }

    const login = async() => {
        try{
            const token = loginApi(user, password);
            console.log(token);
            if(token){
                setToken(token);
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