import { connect } from "react-redux";
import Footer from "../components/Footer";

const mapStateToProps = state => ({
  todoCount: state.todos.filter(el => !el.completed).length,
  todosLength: state.todos.length,
  isShowButton: state.todos.some(el => el.completed)
});

export default connect(mapStateToProps)(Footer);
