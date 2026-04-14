import axios from '../../api/axiosconfig'
import { loadusers,removeusers} from '../reducers/userSlice';


export const asynccurrentUser=(user)=>async(dispatch,getState)=>{
    try {
        const token = localStorage.getItem("token");
        if (token) {
            const currUser = JSON.parse(token);
            dispatch(loadusers(currUser));
        } else {
            console.log("No token found");
        }
    } catch (error) {
        console.log("Invalid token:", error);
        localStorage.removeItem("token");
    }
}


export const asynclogoutUser=(user)=>async(dispatch,getState)=>{
    try {
        localStorage.removeItem("token")
        console.log("User LogOut Successfully");
        dispatch(removeusers());
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

export const asynUpdateUser=(id,user)=>async (dispatch,getState)=>{
    try {
        
        const data=await axios.patch("/users/"+id,user);
        console.log(data);
        localStorage.setItem("token",JSON.stringify(data))
        dispatch(asynccurrentUser());
        
    } catch (error) {
        console.log(error);
        
    }
}

export const asynDeleteUser=(id)=>async (dispatch,getState)=>{
    try {
        
        await axios.delete("/users/"+id);
        dispatch(removeusers())
        
    } catch (error) {
        console.log(error);
        
    }
}

