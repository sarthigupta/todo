import { useState } from "react"

export function ToDoRender({todos}) {
    const [markDone ,setMark] = useState(false);
    return (
        <>
            {
                todos.map((todo) => {
                    return (
                        <div>
                            <h1>{todo.title}</h1>
                            <h2>{todo.description}</h2>
                            <button onClick={ async ()=> {
                                await fetch('http://localhost:3000/completed',{
                                    method: "PUT",
                                })
                                setMark(true)
                            }}>{todo.completed == true ? "completed" : "Mark as completed" }</button>
                        </div>
                    )
                })
            }

        </>
    )
}