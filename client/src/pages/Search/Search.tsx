import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, SearchBar, Books } from "../../components";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

const toastList = new Set();
const MAX_TOAST = 3;

function notify() {
  let toastIdToDismiss: any = null;

  if (toastList.size === MAX_TOAST) {
    const arr = Array.from(toastList);
    const toastId = arr[0];

    if (toastId) {
      toastIdToDismiss = toastId;
    }
  }

  const id: any = toast("This book has been saved!", {
    onClose: () => toastList.delete(id),
    onOpen: () => {
      if (toastIdToDismiss !== null) {
        setTimeout(() => {
          toast.dismiss(toastIdToDismiss);
        }, 1000);
      }
    }
  });
  toastList.add(id);
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
          <button className="btn btn-outline-light my-2 my-sm-0">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/saved"
            >
              Saved
            </Link>
          </button>
        </div>
        <Jumbotron>
          <div className="overlay"></div>
          <div className="content">
            <h2>Google Books Search</h2>
            <SearchBar
              search={search}
              handleInputChange={this.handleInputChange}
              handleFormSearch={this.handleFormSearch}
            />
          </div>
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
                        <a
                          href={item.volumeInfo.previewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button
                            type="button"
                            className="btn btn-outline-warning"
                          >
                            More
                          </button>
                        </a>
                        <button
                          className="btn btn-outline-warning"
                          onClick={() => {
                            notify();
                            this.saveBook(item);
                          }}
                        >
                          Save Book
                        </button>

                        <ToastContainer
                          position="top-right"
                          hideProgressBar={false}
                          // autoClose={false}
                          newestOnTop={true}
                          closeOnClick={true}
                          draggable={false}
                          rtl={false}
                        />
                      </div>
                    </div>
                    // </BookItem>
                  ))}
                </Books>
              ) : (
                <h3 id="search">Search for Books</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
