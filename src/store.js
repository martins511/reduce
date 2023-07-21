import { configureStore } from "@reduxjs/toolkit";
import pupilsReducer from "./features/students"
import assessmentSlice from "./Assessment/assessmentSlice";
export const store = configureStore({
    reducer:{
       pupil: pupilsReducer ,
       record: assessmentSlice
    }
})