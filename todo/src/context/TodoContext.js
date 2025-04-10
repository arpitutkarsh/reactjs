import {createContext, useContext} from 'react'

export const TodoContext = createContext({
    //first we will create an array of todos
    
    todos: [
        {
            //we will delete these later as bydefault we need an empty array of todos
            id: 1,
            todo: "Todo Message",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider