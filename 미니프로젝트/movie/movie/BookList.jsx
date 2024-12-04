import React from "react";
import "./BookList.css";

const BookList = ({ books, onBookSelect }) => {
    return (
        <div className="book-list">
            {books.map((book) => (
                <div key={book.id} className="book-item" onClick={() => onBookSelect(book)}>
                    <img src={book.poster} alt={book.title} />
                    <h3>{book.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default BookList;