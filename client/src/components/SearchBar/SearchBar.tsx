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
        <div className="form-group">
          <label htmlFor="search">Search</label>
          <input
            onChange={handleInputChange}
            value={search}
            name="search"
            type="text"
            className="form-control"
            placeholder="Harry Potter"
            id="search"
          />
          <button onClick={handleFormSearch} className="btn btn-primary">
            Search
          </button>
        </div>
      </form>
    </nav>
  );
};

export default SearchBar;
