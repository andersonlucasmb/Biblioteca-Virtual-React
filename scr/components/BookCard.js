import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/BookCard.css';

function BookCard({ book }) {
  return (
    <div className="book-card">
      <img src={book.coverUrl} alt={book.title} />
      <div className="info">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
        <Link to={`/livro/${book.id}`}>Ver detalhes</Link>
      </div>
    </div>
  );
}

export default BookCard;
