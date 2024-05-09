import { useState, useEffect } from "react";

const useSignup = (props) => {

    const [newData, setNewData] = useState({
        user: "",
        password: "",
        email: "",
        name: "",
    })

    const [confirmEmail, setConfirmEmail] = useState("");
    const [error, setError] = useState(false);

    const handlePage = () => {
        props.setPage(0)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(newData.email === confirmEmail)
            props.setData(prevState => [...prevState, newData]);
        else
            setError(true);
    }

    useEffect(() => {
        console.log(error, newData.email, confirmEmail)
        if(error && newData.email === confirmEmail)
            setError(false);
    },[confirmEmail, newData])


    return{
        newData,
        setNewData,
        confirmEmail,
        setConfirmEmail,
        handlePage,
        handleSubmit,
        error
    }
}

export default useSignup;