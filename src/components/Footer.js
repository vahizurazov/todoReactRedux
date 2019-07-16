import React from "react";
import FilterLink from "../containers/FilterLink";
import { VisibilityFilters } from "../actions";
import ClearComleted from "../components/ClearComleted";

const Footer = () => (
  <footer className="footer">
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

export default Footer;
