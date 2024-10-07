import React from 'react';
import "./style.css";

const BookItem = ({ book, onDelete }) => {
  return (
    <li className="book-item">
      {book}
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </li>
  );
};

export default BookItem;
