import React from 'react';
import TodoList from "./TodoList";

//Access root of entire application
function App() {
  //Add html for to-do app
  return (
    // fragment, allowing to add multiple JSX elements in 1 function
    <>
      {/*1st JSX element*/}
      <TodoList/>
      <input type="text"/>
      <button>Add To-do</button>
      <button>Clear Completed To-dos</button>
      <div>0 left to do</div>
    </>
  )

}

export default App;
