import React from "react";
import SearchBarAnimal from "./SearchBarAnimal";
import SearchBarCategory from "./SearchBarCategory";
import PropTypes from "prop-types";

function SearchBar({ onCategory, onAnimal }) {
  return (
    <div className="search-bar">
      <SearchBarCategory onCategory={onCategory} />
      <SearchBarAnimal onAnimal={onAnimal} />
    </div>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onCategory: PropTypes.func,
  onAnimal: PropTypes.func,
};
