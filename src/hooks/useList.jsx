import { useEffect, useState } from "react"

const useList = ({setPage, data, setData}) => {
    const [filter, setFilter] = useState("");
    const [dataArray, setDataArray] = useState([]);

    const handlePage = () => {
        setPage(0);
    }

    const lowerSearch = filter.toLowerCase();

    const mainFilter = dataArray.filter((item) =>
        item.id.toString().includes(lowerSearch) ||
        item.name.toLowerCase().includes(lowerSearch) ||
        item.email.toLowerCase().includes(lowerSearch)
    );

    const remove = (index) => {
        let temp = [...dataArray];
        temp.splice(index, 1);
        setData(temp);
        setDataArray(temp);
        setFilter("");
        localStorage.setItem('dataPharma', JSON.stringify(temp));
    }

    useEffect(() => {
        setDataArray(data);
    }, [data]);

    return{
        filter,
        setFilter,
        mainFilter,
        handlePage,
        remove
    }
}

export default useList;