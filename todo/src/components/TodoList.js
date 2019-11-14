import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos, toggleTodo }) => {
  <div className="todo-list">
    {todos.map(todo => {
      return (
        <TodoItem key={todo.id} toggleTodo={toggleTodo} /> 
      )
    })}

  </div>
}

export default TodoList;