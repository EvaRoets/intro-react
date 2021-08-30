import React from 'react'

export default function TodoList( {todos} ) {
    return (
        <div>
            {/*curly brackets indicate beginning of JS: print out number of todos*/}
            {todos.length}
        </div>
    )
}
