import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import axios from "axios"; 

export const fetchProducts = createAsyncThunk(
    'todos/fetchProducts', 
    async () => { 
        const response = await axios.get('https://dummyjson.com/products') 
        return response.data.products
    } 
) 

const productSlice = createSlice({ 
    name: 'products', 
    initialState: {
        loading: false, 
        error: null,
        items: []
    }, 
    reducers: {}, 
    extraReducers: (builder) => { 
        builder.addCase(fetchProducts.pending, (state) => { 
            state.loading = true
            state.error = null 
        })
        .addCase(fetchProducts.fulfilled, (state, action) => { 
            state.error = null 
            state.loading = false 
            state.items = action.payload 
        })
        .addCase(fetchProducts.rejected, (state, action) => { 
            state.error = action.error.message 
            state.loading = false 
        }) 
    }  
}) 

export const productReducer = productSlice.reducer