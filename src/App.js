// Import state hook for function component to be rendered every time it changes
import React, { useState} from "react";
import TodoList from "./TodoList";

//Access root of entire application
function App() {
   // Object destructuring: Use default array for to-dos, saved in const (all to-dos, function to update to-dos)
    const [todos, setTodos] = useState([{id : 1, name: 'To-do 1', complete: false}])
  //Add html for to-do app
  return (
    // empty component = fragment, allowing to add multiple JSX elements in 1 function
    <>
      {/*1st JSX element with passed props todos ~ html attribute */}
      <TodoList todos = {todos}/>
      <input type="text"/>
      <button>Add To-do</button>
      <button>Clear Completed To-dos</button>
      <div>0 left To-do</div>
    </>
  )

}

export default App;
