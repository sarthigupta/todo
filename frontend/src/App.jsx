import React, { useState } from 'react'
import ToDo from './components/ToDo'
import { ToDoRender } from './components/ToDoRender'


const App = () => {
  const [todos,setTodos] = useState([]);
  fetch('http://localhost:3000/todos')
  .then(async function(res){
    const result = await res.json();
    setTodos(result.todos);
    console.log(result);
    
  })
  return (
    <>
      <ToDo></ToDo>
      <ToDoRender todos={todos}></ToDoRender>
    </>
  )
}

export default App