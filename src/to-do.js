import { useState } from "react"
import React from 'react'


function ToDo() {

  const [text, setText] = useState('');
  const [toDos, setToDos] = useState([]);

  function handleTextChange(e) {
    const newValue = e.target.value;
    setText(newValue);
  }

  function addToDo(){
    setToDos (prevToDos => {
      return [...prevToDos, text]
    });
    setText("")
  }

  function deleteItem(todoItem) {
    const array = toDos.filter ((toDo) => {
      return todoItem !== toDo ;
    })
    setToDos(array)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Type to add list"
        value={text}
        onChange={handleTextChange}
      />
      <button
        onClick={() => addToDo(console.log(text))}
      >Add</button>
      <div>
        <ul>  
           { toDos.map ((todoItem) => {
              return <li key={todoItem} > {todoItem} <button onClick={()=> deleteItem(todoItem)} >❌</button> </li>;
            }
            )}
        
        </ul>
      </div>

    </div>
  )
}

export default ToDo