export const addTodo = text => ({
  type: "ADD_TODO",
  id: Math.floor(+new Date() + Math.random() * 0xffffffff).toString(36),
  text
});

export const deleteItem = id => ({
  type: "DELETE_TODO",
  id: id
});

export const selectAll = () => ({
  type: "SELECT_ALL"
});

export const isAllChecked = () => ({
  type: "IS_ALL_CHECKED"
});

export const clearCompleted = () => ({
  type: "CLEAR_COMPLETED"
});

export const toggleTodo = id => ({
  type: "TOGGLE_TODO",
  id
});

export const setVisibilityFilter = filter => ({
  type: "SET_VISIBILITY_FILTER",
  filter
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};
