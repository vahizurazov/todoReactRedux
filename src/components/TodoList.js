import React from "react";
import Todo from "../components/Todo";

const TodoList = ({ todos, isAllChecked, actions }) => {
  return (
    <section className="main">
      {!!todos.length && (
        <span>
          <input
            id="toggle-all"
            className="toggle-all"
            type="checkbox"
            checked={isAllChecked}
            onChange={actions.selectAll}
          />
          <label htmlFor="toggle-all">Mark all as complete</label>
        </span>
      )}
      <ul className="todo-list">
        {todos.map(todo => (
          <Todo key={todo.id} {...todo} {...actions} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
