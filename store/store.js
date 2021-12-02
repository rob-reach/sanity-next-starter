import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import userReducer from './slices/userSlice'

export function makeStore() {
    return configureStore({
        reducer: { 
            counter: counterReducer, 
            user: userReducer 
        },
    })
}

export const store = makeStore()