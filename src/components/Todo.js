import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text, id, deleteItemId }) => (
  // <li
  //   onClick={onClick}
  //   style={{
  //     textDecoration: completed ? 'line-through' : 'none'
  //   }}
  // >
  //   {text}
  // </li>
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

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
