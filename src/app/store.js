import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../feature/todo/todoSlice';

//Step1: Configure Stroe and add reducer
export const store = configureStore({
    reducer: todoReducer
});