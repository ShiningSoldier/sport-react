import {useNavigate} from "react-router-dom";
import {AxiosError} from "axios";
import {useAppDispatch} from "../hooks.ts";
import {setMessage} from "../slices/messageSlice.ts";
import {MessageTypes} from "../types/common.ts";

export const useError = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    return {
        handleRequestError: (error: unknown) => {
            if (error instanceof AxiosError && error.response) {
                switch (error.response.status) {
                    case 401:
                        navigate("/login");
                        break;
                    default:
                        dispatch(setMessage({message: error.response.data.message, type: MessageTypes.DANGER}));
                        break;
                }
            }
        }
    }
}