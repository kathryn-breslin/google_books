import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../../components/SearchBar";
import API from "../../utils/API";

interface IContent {
  volumeInfo: any;
  title: string;
  description: string;
  image: string;
}

interface IBook {
  books: IContent[];
  title: string;
  description: string;
  image: string;
  search: string;
}

// interface IProps {
//   results: IBook[];
//   search: string;
//   title: string,
//   description: string,
//   image: string
// }
class Search extends Component {
  state: IBook = {
    books: [],
    search: "",
    title: "",
    description: "",
    image: ""
  };

  // componentDidMount() {
  //   this.searchBooks("harry potter");
  // }

  searchBooks = (search: string) => {
    console.log("This is the search being passed: " + search);
    API.search(search).then(res =>
      this.setState({ books: res.data.items })
    );
    console.log(this.state.books);
  };

  handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log({ [name]: value });
  };

  handleFormSearch = (event: { preventDefault: () => void }) => {
    const { search } = this.state;

    event.preventDefault();
    this.setState({ search: search });
    this.searchBooks(search);
    console.log("Search:" + this.state.search);
  };

  renderBooks() {
    const { books } = this.state;
    console.log("Books: ", books);

    const allBooks = books.map((item, index) => {
      return (
        <li key={index}>
          <p>{item.volumeInfo.title}</p>
          <p>{item.volumeInfo.description}</p>
          <p>{item.volumeInfo.image}</p>
        </li>
      );
    });
    return <ul>{allBooks}</ul>;
  }
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

        <div>
          <div id="renderBooks">{this.renderBooks()}</div>
        </div>
      </div>
    );
  }
}

export default Search;
