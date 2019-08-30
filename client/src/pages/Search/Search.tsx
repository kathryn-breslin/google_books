import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";
// import API from "../../utils/API";

interface IProps {
  results: {};
  search: string;
}
class Search extends Component {
  state: IProps = {
    results: {},
    search: ""
  };

  // searchBooks = (query: string) => {
  //     API.search(query)
  //     .then(res => this.setState({ result: res.data }))
  //     .catch(err => console.log(err));
  //     console.log(this.state.result);
  // }

  handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log({ [name]: value })
  };

  handleFormSearch = (event: { preventDefault: () => void }) => {
    const { search } = this.state;

    event.preventDefault();
    // this.searchBooks(search);
    console.log("Search:" + search);
    // this.setState({ search: search})
  };

  render() {
    const { search } = this.state;

    return (
      <div>
        <Link to="/saved">
          <h1>Saved</h1>
        </Link>
        <h1>Search Page</h1>

        <SearchBar
          search={search}
          handleInputChange={this.handleInputChange}
          handleFormSearch={this.handleFormSearch}
        />
      </div>
    );
  }
}

export default Search;
