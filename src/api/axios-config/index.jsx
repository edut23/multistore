import axios from "axios";

const Api = axios.create({
    baseURL: "http://34.41.234.141"
});

Api.interceptors.request.use(
    (config) => {
        config.headers.Accept = "application/json";
        const token = localStorage.getItem("token");
        if(token !== "null" && token !== "undefined" && token !== null) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export {Api}