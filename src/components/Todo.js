import React from "react";

const Todo = ({ onClick, completed, text, id, deleteItemId }) => (
  <li className={completed ? "completed" : ""}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        id={id}
        checked={completed}
        onChange={onClick}
        // onChange={this.props.checked(todo.id)}
      />
      <label>{text}</label>
      <button className="destroy" onClick={deleteItemId} />
    </div>
  </li>
);

export default Todo;
