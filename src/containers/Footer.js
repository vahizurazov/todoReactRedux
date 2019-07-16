import { connect } from "react-redux";
// import { toggleTodo, deleteItem, selectAll } from "../actions";
import Footer from "../components/Footer";
// import { VisibilityFilters } from "../actions";

const mapStateToProps = state => ({
  todosCount: state.todos.length
});

const mapDispatchToProps = dispatch => ({
  actions: true
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
