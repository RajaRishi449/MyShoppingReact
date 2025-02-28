import { createSlice } from '@reduxjs/toolkit'
const counterSlice = createSlice(
    {
        name : "counter",
        initialState : {
            count : 80
        },
        reducers : {
            increment : (state)=>{
                state.count+=1
            },
            decrement : (state)=>{
                state.count-=1
            },
            incrementbyvalue : (state, action) =>{
                state.count += action.payload
            }

        }
    }
)
export const {increment,decrement, incrementbyvalue}=counterSlice.actions
export default counterSlice.reducer