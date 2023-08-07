import {configureStore} from "@reduxjs/toolkit";
import {MessageSlice} from "./slices/messageSlice";
import {ReportsDateSlice} from "./slices/reportsDateSlice";

export const store = configureStore({
    reducer: {
        messageHandler: MessageSlice.reducer,
        reportsDateHandler: ReportsDateSlice.reducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;