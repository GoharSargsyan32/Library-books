import React from 'react';
import BookItem from '../BookItem.js';
import "./style.css";

const BookList = ({ books, deleteBook }) => {
  return (
    <div className="book-list">
      <h2>Books to Read</h2>
      <ul>
        {books.length > 0 ? (
          books.map((book, index) => (
            <BookItem key={index} book={book} onDelete={() => deleteBook(index)} />
          ))
        ) : (
          <li>No books found</li>
        )}
      </ul>
    </div>
  );
};

export default BookList;
