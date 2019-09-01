import React, { Component } from "react";
import { Link } from "react-router-dom";
import { SearchBar, Books, BookItem } from "../../components";
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

  // renderBooks() {
  //   const { books } = this.state;
  //   console.log("Books: ", books);

  //   const allBooks = books.map((item, index) => {
  //     return (
  //       <li className="list-group-item" key={index}>
  //         <img alt={item.volumeInfo.title} src={item.volumeInfo.imageLinks.smallThumbnail}/>
  //         <div>          
  //           <h1>{item.volumeInfo.title}</h1>
  //           <p>{item.volumeInfo.description}</p></div>
  //       </li>
  //     );
  //   });
  //   return <ul className="list-group">{allBooks}</ul>;
  // }
  render() {
    const { search, books } = this.state;

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
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <>{this.renderBooks()}</> */}
              {books.length ? (
                <Books>
                  {books.map(item=> (
                    <BookItem>
                        <img alt={item.volumeInfo.title} src={item.volumeInfo.imageLinks.smallThumbnail}/>
                          <div>          
                              <h1>{item.volumeInfo.title}</h1>
                              <p>{item.volumeInfo.description}</p>
                          </div>
                    </BookItem>
                  ))}
                </Books>
              ): (
                <h1>No Books</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
