import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, SearchBar, Books, BookItem } from "../../components";
import API from "../../utils/API";

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
    API.search(search).then(res => this.setState({ books: res.data.items }));
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
        <nav className="navbar navbar-light bg-light">
          <Link to="/saved">
            <p>Saved</p>
          </Link>
          <SearchBar
            search={search}
            handleInputChange={this.handleInputChange}
            handleFormSearch={this.handleFormSearch}
          />
        </nav>
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-12">
              {books.length ? (
                <Books>
                  {books.map(item => (
                    <BookItem>
                      <img
                        alt={item.volumeInfo.title}
                        src={item.volumeInfo.imageLinks.smallThumbnail}
                      />
                      <div>
                        <h1>{item.volumeInfo.title}</h1>

                        <p>{item.volumeInfo.description}</p>
                        <p>{item.volumeInfo.previewLink}</p>
                        <br />
                      </div>
                      <button onClick={() => this.saveBook(item)}>
                        Save Book
                      </button>
                    </BookItem>
                  ))}
                </Books>
              ) : (
                <h3>Search for Books!</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
