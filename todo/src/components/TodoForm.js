import React, { useState, useReducer } from 'react';
import TodoItem from './TodoItem';
import { reducer, initialState } from '../reducers/reducer';

const TodoForm = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoInput, setTodoInput] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todoInput });
    setTodoInput('');
  }

  const handleChanges = e => {
    setTodoInput(e.target.value);
  }

  const handleRemoval = e => {
    e.preventDefault();
    dispatch({ type: 'REMOVE_TODO', payload: state })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          id="todoItem"
          name="todoItem"
          value={todoInput}
          placeholder="Add Todo"  
          onChange={handleChanges}
        />
        <button type="submit">Submit</button>
        <button onClick={handleRemoval}>Remove Task</button>
      </form>
      <TodoItem state={state} dispatch={dispatch} />
    </div>
  )
}

export default TodoForm;