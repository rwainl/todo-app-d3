import React from 'react'
import { useState } from 'react';
import ToDoItem from './ToDoItem';

function ToDoList({ list, onStatus, onDelete, onEdit }) {
    

  return (
    <>
        <ul>
            {list.map((item, id) => {
                return(
                    <ToDoItem key={id} id={id} item={item} onStatus={onStatus} onDelete={onDelete} onEdit={onEdit}/>
                )
            })}
        </ul>
    </>
  )
}

export default ToDoList