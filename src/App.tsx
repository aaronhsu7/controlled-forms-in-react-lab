// src/App.tsx

// add an import for the useState hook
import { useState, type FormEvent } from 'react';
import "./App.css";

type Book = {
  title: string;
  author: string;
};


function App() {
  // construct the cityInput state
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [books, setBooks] = useState<Book[]>([]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!title.trim() || !author.trim()) {
        return;
      }

      setBooks((currentBooks) => [
        ...currentBooks,
        {
          title: title.trim(),
          author: author.trim(),
        },
      ]);

      setTitle('');
      setAuthor('');
    };

  return (
      <>
        <h2>My Bookshelf</h2>

        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />

        <label htmlFor="author">Author: </label>
        <input
          id="author"
          name="author"
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />

          <button type="submit">Add Book</button>
        </form>
        <ul>
          {books.map((book, index) => (
            <li key={index}>
              {book.title} by {book.author}
            </li>
          ))}
        </ul>
      </>
    );
}

export default App;