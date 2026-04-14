import axios from '../../api/axiosconfig'
import { loadproducts } from '../reducers/productSlice';


export const asyncCreateProducts=(products)=>async(dispatch,getState)=>{
    try {
        const product=await axios.post("/products",products)
        dispatch(asyncGetProducts())
        console.log(product);
    } catch (error) {
        console.log(error);        
    }
}

export const asyncGetProducts=()=>async(dispatch,getState)=>{
    try {
        const res=await axios.get("/products")
        dispatch(loadproducts(res.data))
        
    } catch (error) {
        console.log(error);      
    }
}

export const asyncUpdateProduct=(id,product)=>async(dispatch,getState)=>{
    try {
        await axios.patch("/products/"+id,product)
        dispatch(asyncGetProducts())
        
    } catch (error) {
        console.log(error);      
    }
}

export const asyncDeleteProduct=(id)=>async(dispatch,getState)=>{
    try {
        await axios.delete("/products/"+id)
        dispatch(asyncGetProducts())
        
    } catch (error) {
        console.log(error);      
    }
}