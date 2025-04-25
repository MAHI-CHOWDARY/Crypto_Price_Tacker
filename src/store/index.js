import { configureStore } from "@reduxjs/toolkit";
import  cryptoReducer  from "./reducer";


export let store=configureStore({
    reducer:{
        crypto:cryptoReducer
    }
})