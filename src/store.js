import { configureStore } from "@reduxjs/toolkit";
import pupilsReducer from "./features/students"
export const store = configureStore({
    reducer:{
       pupil: pupilsReducer 
    }
})