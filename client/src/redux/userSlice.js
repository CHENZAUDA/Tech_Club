import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import {userAPI} from '../service/api.service'
export const getUser = createAsyncThunk('Get User Details', async (id) => {
    return await fetch(`${userAPI}/${id}`).then((res)=> res.json()).then((data=> data.user))
});


const initialState = {
    user:{},
    status: null,
}

const userSlicer = createSlice({
    name:"user",
    initialState,
    extraReducers:{
        [getUser.pending] : (state, action) => {
            state.status = 'loading'
        },
        [getUser.fulfilled] : (state, {payload}) => {
            state.user = payload
            state.status = 'success'
        },
        [getUser.rejected] : (state, action) => {
            state.status = 'failed'
        },

    },
})


export default userSlicer.reducer;