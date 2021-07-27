import { configureStore, createSlice } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import counterReducer from './counter'
import authReducer from './auth'
import testReducer from './Test'
const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer,
        test: testReducer
    }
})


export default store