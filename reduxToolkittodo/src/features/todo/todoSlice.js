import {createSlice, nanoid} from '@reduxjs/toolkit';
//nanoid generates unique id 

const initialState = {
    todos: [{id: 1, text: "Hello World"}]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        }, //state gives the access to value contained inn the initial state and action gives values to determine id
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})


export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer;