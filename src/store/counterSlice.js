import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: null
    },
    reducers: {
        bayProducts: (state, active) => {
            state.count += 1
        }
    }
})

export const { bayProducts } = counterSlice.actions
export const counterReducer = counterSlice.reducer