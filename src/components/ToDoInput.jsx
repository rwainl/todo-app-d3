import React from 'react'
import { useState } from 'react';

function ToDoInput({ onAdd }) {
    const [todoItem, setTodoItem] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        if(todoItem.trim()) {
            onAdd(todoItem);
            setTodoItem("");
        }
    }

  return (
    <>
        <form onSubmit={submitHandler}>
            <input type="text" placeholder='Input List' onChange={(e) => setTodoItem(e.target.value)} />
            <button type="submit">Tambah</button>
        </form>
    </>
  )
}

export default ToDoInput