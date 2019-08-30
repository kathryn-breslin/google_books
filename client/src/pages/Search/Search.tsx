import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";
import API from "../../utils/API";

class Search extends Component {
    state = {
        result: {}, 
        search: ""
    }

    // searchBooks = (query: string) => {
    //     API.search(query)
    //     .then(res => this.setState({ result: res.data }))
    //     .catch(err => console.log(err));
    //     console.log(this.state.result);
    // }

    handleInputChange = (event: any) => {
        const value = event.target.value;
        const name = event.target.value;

        this.setState({ [name]: value });
        console.log({ [name]: value })
    }

    handleFormSearch = (event: { preventDefault: () => void; }) => {
        // const { search } = this.state;
        event.preventDefault();
        // this.searchBooks(search);
        console.log("Search:" + this.state.search);
    }

    render() {
        return (
            <div>
                <Link to="/saved"><h1>Saved</h1></Link>
                <h1>Search Page</h1>

                <SearchBar
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSearch={this.handleFormSearch}
                />
            </div>
        )
    }
}

export default Search;