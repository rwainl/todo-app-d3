import React from 'react'
import { useState, useEffect } from 'react'
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList'
import FilterButton from './components/FilterButton';

function App() {
  const [todoList, setTodoList] = useState(() => {
    const localSaved = localStorage.getItem('todoList');
    return localSaved ? JSON.parse(localSaved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }, [todoList]);

  const [filterMode, setFilterMode] = useState("Semua");

  const filteredList = todoList.filter(item => {
    if(filterMode === "Selesai") return item.completed;
    if(filterMode === "Belum Selesai") return !item.completed;
    return true;
  });

  const addHandler = (item) => {
    setTodoList([...todoList, {
      id: +new Date(), 
      item,
      completed: false,
    }]);
  }

  const statusHandler = (id) => {
    const newTodoList = [...todoList];
    newTodoList[id].completed = !newTodoList[id].completed;
    setTodoList(newTodoList);
  }

  const deleteHandler = (id) => {
    const newTodoList = todoList.filter((_, i) => i !== id);
    setTodoList(newTodoList);
  }

  const editHandler = (id, newText) => {
    const updatedText = todoList.map(items => 
      items.id === id ? {...items, item: newText} : items
    );
    setTodoList(updatedText);
  }

  return (
    <>
      <ToDoInput onAdd={addHandler}/>
      <ToDoList list={filteredList} onStatus={statusHandler} onDelete={deleteHandler} onEdit={editHandler}/>
      <FilterButton setFilter={setFilterMode}/>
    </>
  )
}

export default App