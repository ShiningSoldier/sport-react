import {createSlice} from "@reduxjs/toolkit";
import {getCurrentMonth, getCurrentYear} from "../helpers/reportsHelper.ts";

export const ReportsDateSlice = createSlice({
    name: "reportsDateHandler",
    initialState: {
        year: getCurrentYear(),
        month: getCurrentMonth()
    },
    reducers: {
        setReportsDate: (state, action) => {
            state.year = action.payload.year;
            state.month = action.payload.month;
        }
    }
})

export const {setReportsDate} = ReportsDateSlice.actions;