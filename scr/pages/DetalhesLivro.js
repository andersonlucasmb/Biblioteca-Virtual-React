import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import booksData from '../data/books';

function DetalhesLivro() {
  const { id } = useParams();
  const navigate = useNavigate();
  const book = booksData.find(b => b.id === id);

  if (!book) {
    return <p>Livro não encontrado.</p>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>Voltar</button>
      <h2>{book.title}</h2>
      <img src={book.coverUrl} alt={book.title} />
      <p>
        <strong>Autor:</strong> {book.author}
      </p>
      <p>
        <strong>Gênero:</strong> {book.genre}
      </p>
      <p>{book.description}</p>
    </div>
  );
}

export default DetalhesLivro;
