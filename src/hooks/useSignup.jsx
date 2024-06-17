import { useState, useEffect } from "react";
import { signupApi } from "../api/signup";
import useApp from "./useApp";

const useSignup = ({setPage, setData}) => {

    const [newData, setNewData] = useState({
        user: "",
        password: "",
        email: "",
        name: "",
        role: "USER",
        id: Math.floor(Math.random() * 10000)
    })

    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState(false);
    const {setToken} = useApp();

    const handlePage = () => {
        setPage(0)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        try{
            const token = signupApi(newData.user, newData.password, newData.role);
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

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSubmit(event);
        }
    };

    useEffect(() => {
        if(error && newData.email === confirmEmail)
            setError(false);
    },[confirmEmail, newData, error])


    return{
        newData,
        setNewData,
        confirmEmail,
        setConfirmEmail,
        handlePage,
        handleSubmit,
        error,
        handleKeyPress
    }
}

export default useSignup;