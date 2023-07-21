import { createSlice } from "@reduxjs/toolkit";

const assessmentSlice = createSlice({
    name: "assessment",
    initialState:{value:[]},
    reducers:{
        addAssessment:(state,action)=>{
            state.value.push(action.payload)
        },
        removeAssessment:(state,action)=>{
            state.value.filter(assessment => assessment.id !== action.payload.id)
        },

        updateAll:(state ,action)=>{
            state.value.map((assessment)=>{
                if(assessment.id === action.payload.id){
                     assessment.name = action.payload.name
                     assessment.ca = action.payload.ca
                     assessment.asmt = action.payload.asmt
                     assessment.test = action.payload.test
                     assessment.exam = action.payload.exam
                     const a1 = parseInt(assessment.ca)
                     const a2 = parseInt(assessment.asmt)
                     const a3 = parseInt(assessment.test)
                     const a4 = parseInt(assessment.exam)
                     const total = a1 +a2 +a3 + a4 ;
                     assessment.grade =total
                } 
                return assessment 
            })
        }
    }
})

export const {addAssessment ,removeAssessment ,updateAll} = assessmentSlice.actions;
export default assessmentSlice.reducer