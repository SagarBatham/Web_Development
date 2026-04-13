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
        }
    }
})

export default userSlice.reducer
export const {loadusers}=userSlice.actions