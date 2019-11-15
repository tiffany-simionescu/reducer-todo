export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      const addTodo = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state, todoItems: [...state.todoItems, addTodo]
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todoItems: state.todoItems.map(todo => {
          if(todo.id === action.payload) {
            return {
              ...todo,
              completed: !todo.completed
            }
          } else {
            return todo;
          }
        })
      };

      case "REMOVE_COMPLETED":
        return {
          ...state,
          todoItems: state.todoItems.filter(todo => {
            return !todo.completed
          })
        }
        default:
          return state;
  }
}

export const initialState = {
  todoItems: [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  },
  {
    item: 'Learn about Reduc',
    completed: false,
    id: 3892987590
  },
  {
    item: 'Learn about Async Redux',
    completed: false,
    id: 38929875891
  }
  ]};