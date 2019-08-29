import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";

class Search extends Component {
    state = {
        result: {}, 
        search: ""
    }

    searchBooks = (query: string) => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    }

    handleInputChange = (event: any) => {
        const value = event.target.value;
        const name = event.target.value;

        this.setState({ [name]: value });
    }

    handleFormSearch = (event: any) => {
        const { search } = this.state;
        event.preventDefault();
        this.searchBooks(search);
    }

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