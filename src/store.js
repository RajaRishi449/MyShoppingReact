import { configureStore, createReducer } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice'
import counterSlice from './reducers/counterSlice'
import cartSlice from './reducers/cartSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart : cartSlice
    
  },
})