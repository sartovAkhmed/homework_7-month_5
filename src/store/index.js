import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./productSlice";
import { counterReducer } from "./counterSlice";
import { basketReducer } from "./basketSlice";

export const store = configureStore({
    reducer: {
        products: productReducer,
        counter: counterReducer,
        basket: basketReducer
    }
})