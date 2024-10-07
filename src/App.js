import './App.css';
import { useState} from 'react';
import Header from './components/Header.js';
import BookList from './components/BookList.js';
import BookForm from './components/BookForm.js';

function App() {
  const [books, setBooks] = useState([
    'Name of the Wind',
    "The Wise Man's Fear",
    'Kafka on the Shore',
    'The Master and the Margarita'
  ]);

  const [searchQuery, setSearchQuery] = useState('');
  const [hideBooks, setHideBooks] = useState(false);


  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  
  const deleteBook = (index) => {
    setBooks(books.filter((_, i) => i !== index));
  };

  const toggleHideBooks = () => {
    setHideBooks(!hideBooks);
  };

  const filteredBooks = books.filter(book =>
    book.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="app-container">
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      <button onClick={toggleHideBooks} className="hide-books-btn">
        {hideBooks ? 'Show all books' : 'Hide all books'}
      </button>
      
      {!hideBooks && <BookList books={filteredBooks} deleteBook={deleteBook} />}
      
      <BookForm addBook={addBook} />
      
    </div>
  );
}

export default App;
