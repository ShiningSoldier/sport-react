import {createSlice} from "@reduxjs/toolkit";
import {MessageTypes} from "../types/common";


export const MessageSlice = createSlice({
    name: "messageHandler",
    initialState: {
        message: "",
        type: MessageTypes.INFO
    },
    reducers: {
        setMessage: (state, action) => {
            state.message = action.payload.message;
            state.type = action.payload.type;
        }
    }
})

export const {setMessage} = MessageSlice.actions;