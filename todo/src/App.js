import React, { useReducer } from 'react';
import './App.css';

// Reducer
import { reducer, initialState } from './reducers/reducer';

// Components
import TodoList from './components/TodoList';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addTodo = () => {
    dispatch({ 
      type: "ADD_TODO",
      payload: name
    });
  };

  const toggleTodo = () => {
    dispatch({
      type: "TOGGLE_TODO",
      payload: id
    });
  };

  const removeCompleted = () => {
    dispath({
      type: "REMOVE_COMPLETED"
      // payload: true
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List Application</h1>
        <TodoList {...state} toggleTodo={toggleTodo} />
      </header>
    </div>
  );
}

export default App;
