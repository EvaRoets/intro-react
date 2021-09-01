import React from 'react';
import Todo from './Todo'

export default function TodoList({ todos, checkOffTodo }) {
    return (
        // loop over todos with .map
        // add keys to todos ~ htlm id
        todos.map(todo => {
            return <Todo key ={todo.id} checkOffTodo={checkOffTodo}   todo={todo} />
        })
    )
}
