import {Alert} from "react-bootstrap";
import {useAppDispatch, useAppSelector} from "../../hooks.ts";
import {setMessage} from "../../slices/messageSlice.ts";
import {MessageTypes} from "../../types/common.ts";

const ShowMessage = () => {
    const dispatch = useAppDispatch();
    const message = useAppSelector((state) => state.messageHandler.message);
    const type = useAppSelector((state) => state.messageHandler.type);

    const handleClose = () => {
        dispatch(setMessage({message: '', type: MessageTypes.INFO}));
    }

    return (
        <>
            {message && (
                <div className={"position-fixed top-0 end-0"}>
                    <Alert variant={type} onClose={handleClose} dismissible>{message}</Alert>
                </div>
            )}
        </>
    )
}

export default ShowMessage;