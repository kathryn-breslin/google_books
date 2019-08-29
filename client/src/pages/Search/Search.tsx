import React, { Component } from "react";
import { Link } from "react-router-dom";

class Search extends Component {
    render() {
        return (
            <div>
                <Link to="/saved"><h1>Saved</h1></Link>
                <h1>Search Page</h1>
            </div>
        )
    }
}

export default Search;