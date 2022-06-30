import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import './SearchTask.css';

function SearchTask() {
  const { searchByTitle } = useContext(Context);
  const [search, setSearch] = useState('');

  return (
    <div className="search">
      <label htmlFor="search" > Pesquisa:
          <input
            type="text"
            id="search"
            className="inputSearch"
            onChange={ ({ target }) => setSearch(target.value) }
          />
      </label>
      <button
        type="button"
        className="buttonSearch"
        onClick={ () => searchByTitle(search) }
      >
        Pesquisar
      </button>
    </div>
  )
};

export default SearchTask;