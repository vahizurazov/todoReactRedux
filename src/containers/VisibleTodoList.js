import { connect } from "react-redux";
// import { toggleTodo, deleteItem, selectAll, editTodo } from "../actions";
import TodoList from "../components/TodoList";
import { VisibilityFilters } from "../actions";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;
    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter(t => t.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter(t => !t.completed);
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
  isAllChecked: state.todos.every(el => el.completed)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
  // toggleTodo: id => dispatch(toggleTodo(id)),
  // deleteItem: id => dispatch(deleteItem(id)),
  // selectAll: () => dispatch(selectAll()),
  // editTodo: (id, text) => dispatch(editTodo(id, text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
