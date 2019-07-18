import React, { Component } from "react";
import TodoTextInput from "../components/TodoTextInput";
import classnames from "classnames";

class Todo extends Component {
  constructor(...props) {
    super(...props);
    this.state = {
      isEditing: false
    };
  }

  handleDoubleClick = () => {
    this.setState({ isEditing: true });
  };

  handleSave = (id, text) => {
    console.log("id", id);
    console.log("text", text);
    if (text.length === 0) {
      this.props.deleteItem(id);
    } else {
      this.props.editTodo(id, text);
    }
    this.setState({ isEditing: false });
  };

  render() {
    const { completed, text, id, deleteItem, toggleTodo } = this.props;
    return (
      <li
        className={classnames({
          completed: completed,
          editing: this.state.isEditing
        })}
      >
        {this.state.isEditing ? (
          <TodoTextInput
            text={text}
            isEditing={this.state.isEditing}
            onSave={text => this.handleSave(id, text)}
          />
        ) : (
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              id={id}
              checked={completed}
              onChange={() => toggleTodo(id)}
            />
            <label onDoubleClick={this.handleDoubleClick}>{text}</label>
            <button className="destroy" onClick={() => deleteItem(id)} />
          </div>
        )}
      </li>
    );
  }
}

// const Todo = ({ onClick, completed, text, id, deleteItemId }) => (
//   <li className={completed ? "completed" : ""}>
//     <div className="view">
//       <input
//         className="toggle"
//         type="checkbox"
//         id={id}
//         checked={completed}
//         onChange={onClick}
//       />
//       <label>{text}</label>
//       <button className="destroy" onClick={deleteItemId} />
//     </div>
//   </li>
// );

export default Todo;
