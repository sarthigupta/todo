import React, { useState } from 'react'

const ToDo = () => {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <>
      <input type="text" placeholder='title' onChange={function (e) {
        const value = e.target.value;
        setTitle(e.target.value);
      }} /><br />
      <input type="text" placeholder='description' onChange={function (e) {
        const value = e.target.value;
        setDescription(e.target.value);
      }} /><br />
      <button onClick={() => {
        fetch('http://localhost:3000/todo', {
          method: "POST",
          body: JSON.stringify({
            title: title,
            description: description
          }),
          headers: {
            "Content-Type": "application/json"
          }
        })
          .then(async (res) => {
            const result = await res.json();
            alert("Todo added")
          })
      }}>Add Todo</button>
      <button onClick={() => {
        fetch('http://localhost:3000/todos')
          .then(async function (res) {
            const result = await res.json();
            setTodos(result.todos);
            console.log(result);

          })
        }}> Show Todo</button >
    </>
  )
}

export default ToDo