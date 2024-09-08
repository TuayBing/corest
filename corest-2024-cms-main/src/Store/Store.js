import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "../Redux/exampleSlice"; 

export const store = configureStore ({
    reducer: {
        example: exampleReducer,
    },
});
