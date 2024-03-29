import React, { Component } from "react";
import classnames from "classnames";

class TodoTextInput extends Component {
  state = {
    text: this.props.text || ""
  };

  handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      if (this.props.isEditing) {
        this.setState({ text: "" });
      }
    }
  };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleBlur = e => {
    if (this.props.isEditing) {
      this.props.onSave(e.target.value);
    }
  };

  render() {
    return (
      <input
        className={classnames({
          edit: this.props.isEditing
        })}
        type="text"
        autoFocus={true}
        value={this.state.text}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit}
      />
    );
  }
}

export default TodoTextInput;
