import React from "react";
import FilterLink from "../containers/FilterLink";
import ClearComleted from "../components/ClearComleted";
import { VisibilityFilters } from "../actions";
import { connect } from "react-redux";

const Footer = ({ todosCount }) => {
  // const { countItem } = props;
  console.log("todosCount", todosCount);
  // const pluralItem = countItem === 1 ? "item" : "items";
  return (
    <footer className="footer">
      <span className="todo-count">
        {/* <strong>{countItem}</strong> {itemWord} left */}
      </span>
      <ul className="filters">
        <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed
        </FilterLink>
      </ul>
      <ClearComleted />
    </footer>
  );
};

export default connect()(Footer);
