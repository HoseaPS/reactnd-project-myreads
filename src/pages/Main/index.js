import React, { Component, Fragment } from "react";
import * as BooksAPI from "../../services/BooksAPI";
import Shelf from "../../components/Shelf/Shelf";
import Search from "../../pages/Search/index";
import { Link, Route } from "react-router-dom";
import Styles from "./styles";

class BooksApp extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.displayAllBooks();
  }

  displayAllBooks() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    });
  }

  changeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(books => {
      if (books) {
        this.displayAllBooks();
      }
    });
  };

  render() {
    const { books } = this.state;

    return (
      <Fragment>
        <Styles />
        <div className="app">
          <Route
            path="/search"
            render={() => (
              <Search onBookShelfChange={this.changeBookShelf} books={books} />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                  <div>
                    <Shelf
                      onBookShelfChange={this.changeBookShelf}
                      shelfTitle={"Currently Reading"}
                      shelfName={"currentlyReading"}
                      books={this.state.books}
                    />
                    <Shelf
                      onBookShelfChange={this.changeBookShelf}
                      shelfTitle={"Want to Read"}
                      shelfName={"wantToRead"}
                      books={this.state.books}
                    />
                    <Shelf
                      onBookShelfChange={this.changeBookShelf}
                      shelfTitle={"Read"}
                      shelfName={"read"}
                      books={this.state.books}
                    />
                  </div>
                </div>
                <div className="open-search">
                  <Link to="/search">Add a book</Link>
                </div>
              </div>
            )}
          />
        </div>
      </Fragment>
    );
  }
}

export default BooksApp;
