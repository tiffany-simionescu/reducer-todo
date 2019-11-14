import React from 'react';

const TodoItem = (props) => {
  return (
    <div key={props.id} className="todo-item">
      <h3>{props.item}</h3>
    </div>
  )
}

export default TodoItem;