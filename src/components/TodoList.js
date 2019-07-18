import React from "react";
import Todo from "./Todo";

const TodoList = ({
  todos,
  toggleTodo,
  deleteItem,
  selectAll,
  isAllChecked
}) => {
  return (
    <section className="main">
      {!!todos.length && (
        <span>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={isAllChecked}
            onChange={selectAll}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </span>
      )}
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
};

export default TodoList;
