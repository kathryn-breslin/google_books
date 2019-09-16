import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, SearchBar, Books } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArchive } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/API";
import "./Search.css";

interface IContent {
  volumeInfo: any;
  id: any;
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

class Search extends Component {
  state: IBook = {
    books: [],
    search: "",
    title: "",
    description: "",
    image: ""
  };

  searchBooks = (search: string) => {
    console.log("This is the search being passed: " + search);
    API.search(search).then(res =>
      this.setState({ books: res.data.items, search: "" })
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

  saveBook = (item: any) => {
    // const { books } = this.state;
    console.log("Save book!");
    console.log("Item: " + item.volumeInfo.previewLink);
    API.saveBook({
      title: item.volumeInfo.title,
      authors: item.volumeInfo.authors,
      description: item.volumeInfo.description,
      image: item.volumeInfo.imageLinks.smallThumbnail,
      link: item.volumeInfo.previewLink,
      saved: true
    })
      .then(res => console.log("Saved Book: " + res))
      .catch(err => console.log(err));
  };

  render() {
    const { search, books } = this.state;

    return (
      <div>
        <div id="searchDiv">
          <SearchBar
            search={search}
            handleInputChange={this.handleInputChange}
            handleFormSearch={this.handleFormSearch}
          >
            <button className="btn btn-outline-primary my-2 my-sm-0">
              <Link to="/saved">Saved</Link>
            </button>
          </SearchBar>
        </div>
        <Jumbotron>
          <h2>Google Books Search</h2>
        </Jumbotron>
        <div className="container">
          <div className="row">
            <div className="col-12">
              {books.length ? (
                <Books>
                  {books.map(item => (
                    // <BookItem>
                    <div className="card sm-4">
                      <div className="row no-gutters">
                        <div className="col-sm-4">
                          <img
                            src={item.volumeInfo.imageLinks.thumbnail}
                            className="card-img"
                            alt={item.volumeInfo.title}
                          />
                        </div>
                        <div className="col-sm-8">
                          <div className="card-body">
                            <h5 className="card-title">
                              {item.volumeInfo.title}
                            </h5>
                            <p className="card-text">
                              {item.volumeInfo.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent">
                        <a href={item.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">
                          <button
                            type="button"
                            className="btn btn-outline-warning"
                          >
                            More
                          </button>
                        </a>
                        <button
                          className="btn btn-outline-warning"
                          onClick={() => this.saveBook(item)}
                        >
                          Save Book
                        </button>
                      </div>
                    </div>
                    // </BookItem>
                  ))}
                </Books>
              ) : (
                <h3 id="search">Search for Books!</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
