import { useState, useEffect } from "react";

const useApp = () => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);
    const [token, setToken] = useState(null);

    useEffect(() => {
        if(data.length !== 0){
            const dataString = JSON.stringify(data);
            localStorage.setItem('dataPharma', dataString);
        }
    },[data])

    useEffect(() => {
        localStorage.setItem('token', token)
    },[token])

    useEffect(() => {
        const getData = localStorage.getItem('dataPharma');
        if(getData !== "undefined" && getData !== null){
        setData(JSON.parse(getData));
        }
    },[])


    return{
        page,
        setPage,
        data,
        setData,
        setToken
    }
}

export default useApp;