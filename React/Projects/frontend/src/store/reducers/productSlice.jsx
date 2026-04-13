import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
}
export const productSlice=createSlice({
    name:"products",
    initialState,
    reducers:{
        loadproducts:(state,action)=>{
            state.products=action.payload;
        }
    }
})

export default productSlice.reducer
export const {loadproducts}=productSlice.actions