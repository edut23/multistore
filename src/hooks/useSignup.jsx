import { useState, useEffect } from "react";

const useSignup = ({setPage, setData}) => {

    const [newData, setNewData] = useState({
        user: "",
        password: "",
        email: "",
        name: "",
        id: Math.floor(Math.random() * 10000)
    })

    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState(false);

    const handlePage = () => {
        setPage(0)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newData.email === confirmEmail){
            setData(prevState => [...prevState, newData]);
            handlePage();
            alert("Cadastro realizado.")
        }
        else
            setError(true);
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