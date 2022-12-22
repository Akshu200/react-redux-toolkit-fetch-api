import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const getPost = createAsyncThunk('posts/getPost', async()=>{

    return await axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => res.data)
    
})


const postSlice = createSlice({

    name:'posts',
    initialState:{
        loading:false,
        posts:[],
        error:false

    },
    extraReducers:{
        [getPost.fulfilled] : (state, action)=>{

            state.loading=false
            state.posts= action.payload
        },
        [getPost.rejected] : (state, action)=>{
            state.loading=false
            state.error =true
            
        },
        [getPost.pending] : (state, action)=>{
                state.loading= true
        },
    }

})


export default postSlice.reducer;