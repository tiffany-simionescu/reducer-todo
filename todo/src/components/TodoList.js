import React from 'react';
import TodoItem from './TodoItem';

// add Toggle to props object
const TodoList = ({ todos }) => {
  <div className="todo-list">
    {todos.map(todo => {
      return (
        // Add Toggle to TodoItem when completed
        <TodoItem key={todo.id} /> 
      )
    })}

  </div>
}

export default TodoList;