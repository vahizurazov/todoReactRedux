const todos = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];

    case "SELECT_ALL":
      const isCompleted = state.every(el => el.completed);
      if (isCompleted) {
        state.map(el => {
          el.completed = false;
          return el;
        });
      } else {
        state.map(el => {
          el.completed = true;
          return el;
        });
      }

    case "DELETE_TODO":
      return state.filter(todo => todo.id !== action.id);

    case "CLEAR_COMPLETED":
      return state.filter(el => !el.completed);

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    case "EDIT_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    default:
      return state;
  }
};

export default todos;
