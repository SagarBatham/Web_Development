import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:[],
}
export const cartSlice=createSlice({
    name:"carts",
    initialState,
    reducers:{
        loadcarts:(state,action)=>{
            state.carts=action.payload;
        }
    }
})

export default cartSlice.reducer
export const {loadcarts}=cartSlice.actions