import React from 'react';

function Filter({ authors, genres, selected, onChange }) {
  return (
    <div className="filter">
      <select
        name="author"
        value={selected.author}
        onChange={onChange}
      >
        <option value="">Todos os autores</option>
        {authors.map(a => (
          <option key={a} value={a}>
            {a}
          </option>
        ))}
      </select>

      <select
        name="genre"
        value={selected.genre}
        onChange={onChange}
      >
        <option value="">Todos os gêneros</option>
        {genres.map(g => (
          <option key={g} value={g}>
            {g}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Filter;
