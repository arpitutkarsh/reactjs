import {createSlice, nanoid} from '@reduxjs/toolkit'; 

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
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },

        deleteTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload) 
        },
        updateTodo: (state, action) => {
            // find the todo by id
            const todo = state.todos.id === action.payload.id
            // update the text
            todo.text = action.payload
        },
    }
})

export const {addTodo, removeTodo, updateTodo, deleteTodo} = todoSlice.actions
export default todoSlice.reducer