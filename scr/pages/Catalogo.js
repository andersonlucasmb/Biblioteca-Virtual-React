import React, { useState, useMemo } from 'react';
import booksData from '../data/books';
import BookCard from '../components/BookCard';
import Filter from '../components/Filter';

function Catalogo() {
  const [selected, setSelected] = useState({ author: '', genre: '' });

  const authors = useMemo(
    () => [...new Set(booksData.map(b => b.author))],
    []
  );
  const genres = useMemo(
    () => [...new Set(booksData.map(b => b.genre))],
    []
  );

  const filtered = booksData.filter(book => {
    return (
      (selected.author === '' || book.author === selected.author) &&
      (selected.genre === '' || book.genre === selected.genre)
    );
  });

  function handleFilterChange(e) {
    const { name, value } = e.target;
    setSelected(prev => ({ ...prev, [name]: value }));
  }

  return (
    <div>
      <h2>Catálogo</h2>
      <Filter
        authors={authors}
        genres={genres}
        selected={selected}
        onChange={handleFilterChange}
      />
      <div className="catalogo-list">
        {filtered.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;
