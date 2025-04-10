import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
  return (
    <>
        <div>Todos</div>
        {todos.map((todo) => (
            <li key={todo.id}>
                {todo.text}
                <h1>            </h1>
                <button onClick={() => dispatch(removeTodo(todo.id))}>Delete</button>
            </li>
        ))}
    </>
  )
}

export default Todos