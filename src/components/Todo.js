import React from "react";
import PropTypes from "prop-types";

const Todo = ({ onClick, completed, text }) => (
  // <li
  //   onClick={onClick}
  //   style={{
  //     textDecoration: completed ? 'line-through' : 'none'
  //   }}
  // >
  //   {text}
  // </li>
  <li onClick={onClick}>
    <div className="view">
      <input
        className="toggle"
        type="checkbox"
        // id={todo.id}
        // checked={todo.checked}
        // onChange={this.props.checked(todo.id)}
      />
      <label>{text}</label>
      <button
        className="destroy"
        // onClick={() => this.props.deleted(todo.id)}
      />
    </div>
  </li>
);

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
