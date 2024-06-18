import { useState, useEffect } from "react";
import { clientProfileAPI } from "../api/clientProfile";
import { storeProfileAPI } from "../api/storeProfile";
import { addToCart } from "../api/addToCart";

const useApp = () => {
    const [page, setPage] = useState(0);
    const [profile, setProfile] = useState(null);
    const [data, setData] = useState([]);
    const [product, setProduct] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [userType, setUserType] = useState(localStorage.getItem('userType'));
    const [locked, setLocked] = useState(true);

    // Função para lidar com o logout
    const handleLogout = () => {
        setUserType(null);
        setToken(null);
        localStorage.removeItem("token");
        localStorage.removeItem("userType");
        setLocked(true);
        setPage(0);
    };

    const fetchProfile = async () => {
        try{
            const data = userType === "ROLE_USER" ? await clientProfileAPI() : await storeProfileAPI();
            if(!data)
                handleLogout();
            if(data.nome === null || data.endereco === null)
                setPage(8)
            setProfile(data);
        }
        catch(error){
            console.log(error)
            handleLogout();
        }
    }

    const addProductToCart = async (id) => {
        try{
            const response = await addToCart(id);
        }
        catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        if(token !== "null" && token !== "undefined" && userType !== "null" && userType !== "undefined")
          setPage(2);
        else
          setPage(0) // Definir a HomePage como a página inicial
      }, []);

    useEffect(() => {
        if(token !== "null" && token !== "undefined" && userType !== "null" && userType !== "undefined"){
            setLocked(false);
            fetchProfile();
        }
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
        product,
        setProduct,
        setToken,
        userType,
        setUserType,
        locked,
        handleLogout,
        addProductToCart,
        profile,
    }
}

export default useApp;