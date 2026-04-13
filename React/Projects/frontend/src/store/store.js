import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/userSlice'
import productReducer from './reducers/productSlice'
import cartReducer from './reducers/cartSlice'

import { useReducer } from 'react'

export const store = configureStore({
    reducer:{
        userreducer: userReducer,
        productreducer:productReducer,
        cartreducer:cartReducer,
    }
})
