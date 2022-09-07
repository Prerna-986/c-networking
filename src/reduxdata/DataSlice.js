import { createSlice } from "@reduxjs/toolkit";

const slice = new createSlice({
    name : 'data',
    initialState : {
        value : {
            category : [] , brand : [] , product : []
        }
    },
    reducers : {
        loadCategory : function(state,action)
        {
            var data = {...state.value,category:action.payload}            
            state.value = data
        },
        loadBrand : function(state,action)
        {
            var data = {...state.value,brand:action.payload}            
            state.value = data
        },
        loadProduct : function(state,action)
        {
            var data = {...state.value,product:action.payload}            
            state.value = data
        }     
    }
})

export const {loadCategory,loadBrand,loadProduct} = slice.actions;
export default slice.reducer
