import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Books, BookItem } from "../../components";
import API from "../../utils/API";

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
  render() {
      const { savedBooks } = this.state;
    return (
      <div>
        <Link to="/">
          <h1>Search</h1>
        </Link>
        <h1>Saved Page</h1>

        <div className="container">
          <div className="row">
            <div className="col-12">
              {savedBooks.length ? (
                <Books>
                  {savedBooks.map(saved => (
                    <BookItem>
                      <img
                        alt={saved.title}
                        src={saved.image}
                      />
                      <div>
                        <h1>{saved.title}</h1>

                        <p>{saved.description}</p>
                        <p>{saved.link}</p>
                        <br/>
                      </div>
                      {/* <button onClick={() => this.saveBook(item)}>Save Book</button> */}
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

export default Saved;
