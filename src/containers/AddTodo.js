import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  return (
    <header className="header">
      <h1>Todos</h1>
      <input
        type="text"
        onKeyDown={e => {
          let inputValue = e.target.value.trim();
          if (e.keyCode !== 13 || inputValue === "") return;
          dispatch(addTodo(inputValue));
          e.target.value = "";
        }}
        // onBlur={this.handleBlur}
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
      />
    </header>
  );
};

export default connect()(AddTodo);
