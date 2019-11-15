import React, { useState } from 'react';

const TodoForm = ({ addTodo, removeCompleted }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    addTodo(todo);
  }

  const handleChanges = e => {
    setTodo(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        name="todoItem"
        value={todo}
        placeholder="Add Todo"  
        onChange={handleChanges}
      />
      <button type="submit">Submit</button>
      <button onClick={removeCompleted}>Remove Task</button>
    </form>
  )
}

export default TodoForm;