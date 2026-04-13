import axios from '../../api/axiosconfig'
import { loadusers } from '../reducers/userSlice';


export const asynccurrentUser=(user)=>async(dispatch,getState)=>{
    try {
        const currUser=JSON.parse(localStorage.getItem("token"))
        if(currUser) dispatch(loadusers(currUser))
        else console.log("User Not Found")
    } catch (error) {
        console.log(error);       
    }
}


export const asynclogoutUser=(user)=>async(dispatch,getState)=>{
    try {
        localStorage.removeItem("token")
    } catch (error) {
        console.log(error);       
    }
}


export const asyncregisterUser = (user) => async (dispatch, getState) => {
    try {
        const res = await axios.post("/users", user)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

export const asyncloginUser = (user) => async (dispatch, getState) => {
    try {
        console.log("Sending:", user.email, user.password);
        const res = await axios.get(
            `/users`
        );
        const existUser = res.data.find(
            (u) => u.email === user.email && u.password === user.password
        );

        localStorage.setItem("token",JSON.stringify(existUser))
        dispatch(loadusers(existUser));
        console.log(existUser);


    } catch (error) {
        console.log(error);
    }
};

