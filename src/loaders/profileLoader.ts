import {redirect} from "react-router-dom";
import axiosInstance from "../axios/axiosInstance.ts";

export const ProfileLoader = async () => {
    try {
        return await axiosInstance.get('/user');
    } catch (error: any) {
        return redirect('/login')
    }


}