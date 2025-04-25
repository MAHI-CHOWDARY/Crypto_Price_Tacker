import { createSlice } from "@reduxjs/toolkit";

import { data } from "../api/data";

export let cryptoSlice=createSlice({
    name:"crypto",
    initialState:data,
    reducers:{
        updateasset:(state,action)=>{
            const index = state.findIndex(asset => asset.symbol === action.payload.symbol);
            if (index !== -1) {
            state[index] = { ...state[index], ...action.payload };
            }
        }
    }
})

export const {updateasset}=cryptoSlice.actions
export default cryptoSlice.reducer