import { useState, useEffect } from "react";

const useApp = () => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userType, setUserType] = useState(localStorage.getItem('userType'));
    const [locked, setLocked] = useState(true);

    useEffect(() => {
        if(token !== "null" && token !== "undefined" && userType !== "null" && userType !== "undefined")
            setLocked(false);
        else
            setLocked(true);
    },[token, userType])

    useEffect(() => {
        localStorage.setItem('token', token);
    },[token])

    useEffect(() => {
        localStorage.setItem('userType', userType);
    },[userType])



    return{
        page,
        setPage,
        data,
        setData,
        setToken,
        userType,
        setUserType,
        locked
    }
}

export default useApp;