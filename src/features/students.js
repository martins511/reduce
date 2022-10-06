import { createSlice } from "@reduxjs/toolkit";

const initialState ={value:{id:0,name:"",score:0}}
const pupilsSlice = createSlice({
    name: "pupil",
    initialState,
    reducers:{
        data1 :(state,action)=>{
             state.value = action.payload
        },
        data2 :(state,action)=>{
            state.value= action.payload
        },
        data3 :(state,action)=>{
            state.value= action.payload
        },
        data4 :(state,action)=>{
            state.value= action.payload
        }
    }
})
export const{data1,data2,data3,data4}= pupilsSlice.actions;
export default pupilsSlice.reducer