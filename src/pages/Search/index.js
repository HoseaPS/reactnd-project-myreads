import React, { Fragment, Component } from "react";
import * as BooksAPI from "../../services/BooksAPI";
import Book from "../../components/Book/Book";
import { Link } from "react-router-dom";
import Styles from "./styles";

export default class UpdateQuery extends Component {
  state = {
    books: this.props.books,
    query: "",
    searchResults: []
  };
  changeBookShelf = this.props.onBookShelfChange;

  updateQuery = query => {
    this.setState({ query: query.trimLeft() });

    if (query.length === 0) {
      this.setState({ searchResults: "" });
    } else {
      this.setState({ searchResults: "" });
      BooksAPI.search(query.trimLeft()).then(searchResults => {
        if (Array.isArray(searchResults) && searchResults.length > 0) {
          searchResults.map((searchBook, index) => {
            let temp = this.state.books.filter(shelfBook => {
              return shelfBook.id === searchBook.id;
            });
            if (Array.isArray(temp) && temp.length > 0) {
              searchResults[index].shelf = temp[0].shelf;
            } else {
              searchResults[index].shelf = "none";
            }
            return temp;
          });
          this.setState({ searchResults });
          BooksAPI.getAll().then(books => {
            this.setState({ books });
          });
        }
      });
    }
  };

  render() {
    const { query } = this.state;
    let results = this.state.searchResults;
    results = results && results.length >= 1 ? results : [];

    return (
      <Fragment>
        <Styles />
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/"
              className="close-search"
              onClick={() => this.setState({ query: "", results: "" })}
            >
              Close
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={event => this.updateQuery(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {results.map((eachBook, index) => (
                <li key={index} className="contact-list-item">
                  <Book
                    onBookShelfChange={this.changeBookShelf}
                    book={eachBook}
                  />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Fragment>
    );
  }
}
