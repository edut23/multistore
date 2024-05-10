import { useState, useEffect } from "react";

const useApp = () => {
    const [page, setPage] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        if(data.length !== 0){
            const dataString = JSON.stringify(data);
            localStorage.setItem('dataPharma', dataString);
        }
    },[data])

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
        setData
    }
}

export default useApp;