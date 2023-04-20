import axios from "axios";


export const axiosBase = axios.create({
    withCredentials: true,
    baseURL: import.meta.env.VITE_HOST
})

