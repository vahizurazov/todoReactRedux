import React from "react";
import FilterLink from "../containers/FilterLink";
import ClearComleted from "../components/ClearComleted";
import { VisibilityFilters } from "../actions";

const Footer = ({ todoCount, todosLength, isShowButton }) => {
  // const { countItem } = props;
  // console.log("todoCount", todoCount);
  const pluralItem = todoCount === 1 ? "item" : "items";

  return (
    <footer className="footer">
      {!!todosLength && (
        <>
          <span className="todo-count">
            <strong>{todoCount}</strong> {pluralItem} left
          </span>

          <ul className="filters">
            <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
              Active
            </FilterLink>
            <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
              Completed
            </FilterLink>
          </ul>
        </>
      )}
      {!!isShowButton && <ClearComleted />}
    </footer>
  );
};

export default Footer;
