import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {productAPI} from '../service/api.service'
export const getProductDetails = createAsyncThunk('product/getProductDetails', async (id) => {
    return await fetch(`${productAPI}/${id}`).then((res)=> res.json())
});

const initialState = {
    product:{},
    status: null,
}

const productDetailsSlicer = createSlice({
    name:"product",
    initialState,
    extraReducers:{
        [getProductDetails.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getProductDetails.fulfilled] : (state, {payload}) => {
            state.product = payload
            state.status = 'success'
        },
        [getProductDetails.rejected] : (state, action) => {
            state.status = 'failed'
        },

    },
})


export default productDetailsSlicer.reducer;