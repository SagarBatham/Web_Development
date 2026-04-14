import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:null,
}
export const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        loadusers:(state,action)=>{
            state.users=action.payload;
        },
        removeusers:(state,action)=>{
            state.users=null
        }
    }
})

export default userSlice.reducer
export const {loadusers}=userSlice.actions
export const {removeusers}=userSlice.actions