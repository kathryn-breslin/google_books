import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Books } from "../../components";
import API from "../../utils/API";
import "./Saved.css";

interface IContent {
  volumeInfo: any;
  id: any;
  title: string;
  description: string;
  image: string;
  link: string;
}

interface IBooks {
  savedBooks: IContent[];
  title: string;
  description: string;
  image: string;
}

class Saved extends Component {
  state: IBooks = {
    savedBooks: [],
    title: "",
    description: "",
    image: ""
  };

  componentDidMount() {
    this.loadSaved();
  }

  loadSaved = () => {
    API.getBooks()
      .then(res => this.setState({ savedBooks: res.data }))
      .catch(err => console.log(err));
  };

  deleteBook = (saved: any) => {
    API.deleteBook(saved._id)
      .then(res => this.loadSaved())
      .catch(err => console.log(err));
  };
  render() {
    const { savedBooks } = this.state;
    return (
      <div>
        <div id="searchDiv">
          <button className="btn btn-outline-light my-2 my-sm-0">
            <Link style={{ textDecoration: 'none', color: 'white' }} to="/">Search</Link>
          </button>
        </div>
        <Jumbotron>
          <div className="overlay"></div>
          <div className="content">
            <h2>Saved Books</h2>
          </div>
        </Jumbotron>

        <div className="container">
          <div className="row">
            <div className="col-12">
              {savedBooks.length ? (
                <Books>
                  {savedBooks.map(saved => (
                    <div className="card sm-4">
                      <div className="row no-gutters">
                        <div className="col-sm-4">
                          <img
                            alt={saved.title}
                            src={saved.image}
                            className="card-img"
                          />
                        </div>
                        <div className="col-sm-8">
                          <div className="card-body">
                            <h5 className="card-title">{saved.title}</h5>
                            <p className="card-text">{saved.description}</p>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer bg-transparent">
                        <a
                          href={saved.link}
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
                          onClick={() => this.deleteBook(saved)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </Books>
              ) : (
                <h3 id="search">No Saved Books</h3>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Saved;
