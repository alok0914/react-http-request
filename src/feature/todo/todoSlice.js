import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{ id: 1, text: 'Hello' }]
}

//Step1: CrateSlice --> 1.name, 2.initialState, 3. reducers(all functions)
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const addToDo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(addToDo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => {
                if (todo.id === action.payload) {
                    todo.text = action.payload;
                }
            })
        }
    }
})

//Step2: Export all function in reducers as actions
export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

//Step3: Export the reducer
export default todoSlice.reducer;