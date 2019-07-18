import { connect } from "react-redux";
import Footer from "../components/Footer";

function mapStateToProps(state, ownProps) {
  // console.log("stateToProps", state.todos.filter(el => !el.completed).length);

  return {
    todoCount: state.todos.filter(el => !el.completed).length,
    todosLength: state.todos.length,
    isShowButton: state.todos.some(el => el.completed)
  };
}

const mapDispatchToProps = dispatch => ({
  // actions: bindActionCreators(TodoActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer);
