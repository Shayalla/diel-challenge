import React, { useContext, useState } from 'react';
import Context from '../../context/Context';
import './SearchTask.css';

function SearchTask() {
  const { searchByTitle, searchByDate } = useContext(Context);
  const [search, setSearch] = useState('');

  const handleChangeSearch = ({ name, value }) => {
    setSearch({ [name]:value})
  };

  const buttonSearch = () => {
    search.title
      ? searchByTitle(search.title)
      : searchByDate(search.date)
  };

  return (
    <div className="search">
      <label htmlFor="search" > Pesquisa:
          <input
            type="text"
            id="search"
            className="inputSearch"
            name="title"
            onChange={ ({ target }) => handleChangeSearch(target) }
          />
      </label>
      <input
        type="date"
        name="date"
        className="inputSearch"
        onChange={ ({ target }) => handleChangeSearch(target) }
      />
      <button
        type="button"
        className="buttonSearch"
        onClick={ buttonSearch }
      >
        Pesquisar
      </button>
    </div>
  )
};

export default SearchTask;