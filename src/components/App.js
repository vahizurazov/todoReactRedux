import React from "react";
import Footer from "../containers/FooterCont";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = () => (
  <div className="todoapp">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App;
