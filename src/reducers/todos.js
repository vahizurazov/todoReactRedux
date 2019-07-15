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
    case "IS_ALL_CHECKED":
    // console.log(state, "state");

    case "SELECT_ALL":
      console.log("state.completed", state.every(el => el.completed));
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
      // console.log("state", state);
      return state.filter(todo => todo.id !== action.id);

    case "TOGGLE_TODO":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    default:
      return state;
  }
};

export default todos;
