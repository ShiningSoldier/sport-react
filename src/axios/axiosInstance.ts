import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3210',
    withCredentials: true,
});

export default axiosInstance;