import React from "react";
import { useState } from "react";

function ToDoItem({ item, id, onStatus, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item.item);

  const saveHandler = (event) => {
    event.preventDefault();
    onEdit(item.id, newText);
    setIsEditing(false);
  };
  return (
    <>
      <li
        key={id}
        style={{ textDecoration: item.completed ? "line-through" : "none" }}
      >
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => onStatus(id)}
        />
        <span>{item.item}</span>
        {isEditing ? (
          <>
            <input value={newText} onChange={(e) => setNewText(e.target.value)} />
            <button onClick={saveHandler}>Save</button>
          </>
        ) : (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        )}
        <button onClick={() => onDelete(id)}>Hapus</button>
      </li>
    </>
  );
}

export default ToDoItem;
