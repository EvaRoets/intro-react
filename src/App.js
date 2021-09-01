// Import state hook for function component to be rendered every time it changes
// Import use ref hook to access elements in html
// Import use effect hook to store to-dos in local storage
import React, { useState, useRef, useEffect } from "react";
import './css/style.css';
import TodoList from "./TodoList";
import Footer from "./components/footer";
import { v4 as uuidv4 } from 'uuid'

//Access root of entire application
function App() {
    // Object destructuring: shorthand for
    // const myState = useState(...); returning the values of the array
    // const todos = myState[0]; 1st value = current state = current list of to-dos
    // const setTodos = myState[1]; 2nd value = update current state
    const [todos, setTodos] = useState([])

    // Define ref variable with useRef(), allowing access to input tag in function
    const todoNameRef = useRef()

    // Define key in const for useEffect function
    const localStorageKey = 'TodoList.todos'

    // Add function to load saved to-dos after refresh
    // Use an empty array to call the function only once
    useEffect(() =>{
        // converse string to array with parse
        const storedTodos = JSON.parse(localStorage.getItem(localStorageKey))
        // set to-dos to stored to-dos if there are stored to-dos
        if (storedTodos) setTodos(storedTodos)
    }, [])

    // Add function to save our to-dos everytime these to-dos change
    // with 1st parameter effect = another function to do things, 2nd parameter dependencies = array of properties
    useEffect(() => {
        localStorage.setItem(localStorageKey, JSON.stringify(todos))
    }, [todos])




    //Add function to handle button click
    function AddTodo (event) {
        //Access input tag value
        const name = todoNameRef.current.value
        // If there is no to-do,  return so there is no empty to do
        if (name === '') return

        //Take previous to-dos with function call
        setTodos(prevTodos => {
            return [...prevTodos,
                //Add new to-dos, with uuidv4 function to generate random IDs
                { id: uuidv4(), name: name, complete: false}]
        })

        // Clear out input field after clicking
        todoNameRef.current.value = null

    }

    //Add html for to-do app
    return (
        // empty component = fragment, allowing to add multiple JSX elements in 1 function
        <>
            {/*1st JSX element with passed props todos ~ html attribute */}
            <TodoList todos={todos}/>
            {/*set ref to a variable so it is accessible through useRef inside function */}
            <input type="text" ref={todoNameRef}/>
            {/*Add function to handle the button click*/}
            <button onClick={AddTodo}>Add To-do</button>
            <button>Clear Completed To-dos</button>
            <div> {todos.filter(todo => !todo.complete).length} left To-do</div>
            <Footer/>
        </>
    );
}

export default App;
