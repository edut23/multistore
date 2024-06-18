import { useState, useEffect } from "react";
import { signupApi } from "../api/signup";
import useApp from "./useApp";
import { clientInfosAPI } from "../api/clientInfos";
import { storeInfosAPI } from "../api/storeInfos";

const useInfos = ({userType, setPage, setData}) => {

    const [newData, setNewData] = useState({
        username: "",
        email: "",
        telefone: "",
        endereco: "",
        nome: "",
        sobrenome: "",
        CPF: "",
        CNPJ: "",
        dataNasc: "",
        descricao: "",
        genero: "HOMEM"
    })

    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState(false);

    const handlePage = () => {
        setPage(0)
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            const token = userType === "ROLE_USER" ? await clientInfosAPI(newData) : await storeInfosAPI(newData);
            if(token){
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

export default useInfos;