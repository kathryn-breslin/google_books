import React from "react";

interface IProps {
    value: string;
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
    handleFormSearch: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; 
}
const SearchBar = ({ value, handleInputChange, handleFormSearch}: IProps) =>  {
    return (
        <form>
            <div className="form-group">
                <label>Search</label>
                <input
                onChange={handleInputChange}
                value={value}
                name="search"
                type="text"
                className="form-control"
                placeholder="Harry Potter"
                id="search"
                />
                <button 
                onClick={handleFormSearch} className="btn btn-primary">Search</button>
            </div>
        </form>
    );
}

export default SearchBar;