import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {productAPI} from '../service/api.service'
export const getProducts = createAsyncThunk('test', async () => {
    return await fetch(productAPI).then((res)=> res.json()).then((data=> data.products))
});

const initialState = {
    products:[],
    status: null,
}

const productSlicer = createSlice({
    name:"products",
    initialState,
    extraReducers:{
        [getProducts.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled] : (state, {payload}) => {
            state.products = payload
            state.status = 'success'
        },
        [getProducts.rejected] : (state, action) => {
            state.status = 'failed'
        },

    },
})


export default productSlicer.reducer;