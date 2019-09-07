import React from "react";

interface IProps {
  search: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleFormSearch: (event: React.MouseEvent<HTMLElement>) => void;
}
const SearchBar = ({ search, handleInputChange, handleFormSearch }: IProps) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <form>
        <div className="form-inline searchBar">
          <input
            onChange={handleInputChange}
            value={search}
            name="search"
            type="text"
            className="form-control mr-sm-2"
            placeholder="Harry Potter"
            id="search"
          />
          <button onClick={handleFormSearch} className="btn btn-outline-success my-2 my-sm-0">
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;
