import axios from "axios";

export const baseUrl = 'http://localhost:3210';

const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
});

export default axiosInstance;