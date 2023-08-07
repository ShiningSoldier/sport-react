import {redirect} from "react-router-dom";
import axiosInstance from "../axios/axiosInstance.ts";

export const ProfileLoader = async () => {
    try {
        const response = await axiosInstance.get('/user');
        if (response.data.birth_date) {
            const date = new Date(response.data.birth_date)
            const year = date.toLocaleDateString("default", {year: "numeric"})
            const month = date.toLocaleDateString("default", {month: "2-digit"})
            const day = date.toLocaleDateString("default", {day: "2-digit"})
            response.data.birth_date = `${year}-${month}-${day}`
        }
        return response;
    } catch (error: any) {
        return redirect('/login')
    }


}