import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todoItems, toggleTodo }) => {
  return (
  <div className="todo-list">
    {todoItems.map(todo => {
      return (
        <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} /> 
      )
    })}

  </div>
  )}

export default TodoList;