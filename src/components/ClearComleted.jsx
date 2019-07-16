import React from "react";
import { connect } from "react-redux";
import { clearCompleted } from "../actions";

const ClearComleted = ({ dispatch }) => {
  return (
    <button
      onClick={() => {
        dispatch(clearCompleted());
      }}
      className="clear-completed"
    >
      Clear completed
    </button>
  );
};

export default connect()(ClearComleted);
