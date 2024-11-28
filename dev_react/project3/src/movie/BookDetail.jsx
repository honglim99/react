import React from "react";
import Rating from "./Rating";
import "./BookDetail.css";

const BookDetail = ({ book }) => {
  return (
    <div className="book-detail">
      <img src={book.poster} alt={book.title} />
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <p>{book.description}</p>
      <Rating bookId={book.id} />
    </div>
  );
};

export default BookDetail;
