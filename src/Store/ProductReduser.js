import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product :[],
}

const ProductSlice = createSlice({
    name:"Product",
    initialState,
    reducers:{
        getData :(state,action) =>{
            state.product = action.payload
        }

    }

})

export const {getData} = ProductSlice.actions

export default ProductSlice.reducer;