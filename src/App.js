// Import state hook for function component to be rendered every time it changes
// Import use ref hook to access elements in html
import React, { useState, useRef } from "react";
import './css/style.css';
import TodoList from "./TodoList";
import Footer from "./components/footer";
// import uuidv4 from 'uuid/v4'


//Access root of entire application
function App() {
    // Object destructuring: Use default array for to-dos, saved in const (all to-dos, function to update to-dos)
    const [todos, setTodos] = useState([])
    // Define ref variable with useRef(), allowing access to input tag in function
    const todoNameRef = useRef()

    //Add function to handle button click
    function AddTodo (event) {
        //TODO set new current to-dos

        //Access input tag value
        const name = todoNameRef.current.value
        // If there is no to-do,  return so there is no empty to do
        if (name === '') return

        //Take previous to-dos with function call
        setTodos(prevTodos => {
            return [...prevTodos,
                //Add new to-dos, with uuidv4 function to generate random IDs
                // TODO { id: uuidv4(), name: name, complete: false}]
                { id: 1, name: name, complete: false}]

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
            <div>0 left To-do</div>
            <Footer/>
        </>
    );
}

export default App;
