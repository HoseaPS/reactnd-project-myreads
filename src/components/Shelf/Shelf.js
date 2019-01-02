import React, { Fragment } from "react";

import Book from "../Book/Book";

import Styles from "./styles";

const Shelf = props => {
  return (
    <Fragment>
      <Styles />
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books
              .filter(function(eachBook) {
                return eachBook.shelf === props.shelfName;
              })
              .map((eachBook, index) => (
                <li key={index} className="contact-list-item">
                  <Book
                    onBookShelfChange={props.onBookShelfChange}
                    book={eachBook}
                  />
                </li>
              ))}
          </ol>
        </div>
      </div>
    </Fragment>
  );
};
export default Shelf;
