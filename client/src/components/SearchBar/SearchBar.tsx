import React from "react";
import "./SearchBar.css";

interface IProps {
  search: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSearch: (event: React.MouseEvent<HTMLElement>) => void;
}
const SearchBar = ({ search, handleInputChange, handleFormSearch }: IProps) => {
  return (
    <nav className="navbar navbar-expand-lg" id="nav">
      <form>
        <div className="input-group">
          <input
            onChange={handleInputChange}
            value={search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Harry Potter"
            id="search"
          />
        </div>
        <div id="submit">
          <button
            onClick={handleFormSearch}
            className="btn btn-outline-warning btn-block"
          >
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;
