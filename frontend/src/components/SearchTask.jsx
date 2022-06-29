import React, { useContext, useState } from 'react';
import Context from '../context/Context';

function SearchTask() {
  const { searchByTitle } = useContext(Context);
  const [search, setSearch] = useState('');

  return (
    <div>
      <label htmlFor="search">
          <input type="text" id="search" onChange={ ({ target }) => setSearch(target.value) } />
      </label>
      <button type="button" onClick={ () => searchByTitle(search) }>Pesquisar</button>
    </div>
  )
};

export default SearchTask;