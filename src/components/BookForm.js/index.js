import React, { useState } from 'react';
import "./style.css";

const BookForm = ({ addBook }) => {
  const [bookName, setBookName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (bookName.trim()) {
      addBook(bookName);
      setBookName('');
    }
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a book..."
        value={bookName}
        onChange={(e) => setBookName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default BookForm;
