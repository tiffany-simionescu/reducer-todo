import React, { useReducer } from 'react';
import './App.css';

// Reducer
import { reducer, initialState } from './reducers/reducer';

// Components
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    dispatch({ 
      type: "ADD_TODO",
      payload: state.item
    });
  };

  const toggleTodo = () => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: state.id
    });
  };

  const removeCompleted = (e) => {
    e.preventDefault();
    dispatch({ 
      type: "CLEAR_COMPLETED" 
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List Application</h1>
        <TodoForm addTodo={addTodo} removeCompleted={removeCompleted} />
        <TodoList {...state} toggleTodo={toggleTodo} />
      </header>
    </div>
  );
}

export default App;
