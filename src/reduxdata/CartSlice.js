import { createSlice } from "@reduxjs/toolkit";

const slice = new createSlice({
    name : 'cart',
    initialState : {
        value : []
    },
    reducers : {
        addCart : function(state,action)
        {       
            state.value = [...state.value,action.payload]
        }  
    }
})

export const {addCart} = slice.actions;
export default slice.reducer