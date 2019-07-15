import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo, deleteItem }) => (
  <section className="main">
    <span>
      <input
        id="toggle-all"
        className="toggle-all"
        type="checkbox"
        // checked={isAllChecked()}
        // onChange={selectAll}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
    </span>
    <ul className="todo-list">
      {todos.map(todo => (
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
          deleteItemId={() => deleteItem(todo.id)}
        />
      ))}
    </ul>
  </section>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
