import React from 'react';
import Todo from './Todo'

export default function TodoList({ todos }) {
    return (
        // loop over todos with .map
        todos.map(todo => {
            return <Todo todo={todo} />
        })
    )
}
