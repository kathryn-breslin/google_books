import React from "react";
import "./SearchBar.css";
// import { Link } from "react-router-dom";

interface IProps {
  search: string;
  children: any;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSearch: (event: React.MouseEvent<HTMLElement>) => void;
}

const SearchBar = ({ search, handleInputChange, handleFormSearch, children }: IProps) => {
  return (
    <nav className="navbar navbar-expand-lg" id="nav">
      <form className="form-inline my-2 my-lg-0">
        <input
          className="form-control mr-sm-2"
          type="search"
          aria-label="Search"
          onChange={handleInputChange}
          value={search}
          name="search"
          placeholder="Harry Potter"
          id="search"
        />
        <button
          onClick={handleFormSearch}
          className="btn btn-outline-success my-2 my-sm-0"
          type="submit"
        >
          Search
        </button>
        {children}
      </form>
    </nav>
  );
};

export default SearchBar;
