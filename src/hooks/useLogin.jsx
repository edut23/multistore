import { useState } from "react";

const useLogin = ({setPage, data}) => {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handlePage = () => {
        setPage(1);
    }

    function verify() {
        try{
            const targetUser = data.find((u) => u.user === user && u.password === password);
            if(targetUser !== undefined)
                setPage(2);
            else
                setError(true);
        }catch(error){
            setError(true);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        verify();
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