import { configureStore } from "@reduxjs/toolkit";

import dataReducer from "./DataSlice";
import cartReducer from './CartSlice'

export default new configureStore({
    reducer : {
        data : dataReducer,
        cart : cartReducer
    }
})