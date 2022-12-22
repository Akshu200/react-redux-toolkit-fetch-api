import {configureStore} from '@reduxjs/toolkit';
import PostReducer from '../redux/slice/postSlice';

export default configureStore({

    reducer:{
        post:PostReducer,
    }
})

