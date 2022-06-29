import React from 'react';
import ListTasks from '../components/ListTasks';
import NewTasks from '../components/NewTasks';
import SearchTask from '../components/SearchTask';

function Home() {
  return (
    <div>
      <NewTasks />
      <SearchTask />
      <ListTasks />
    </div>
  )
};

export default Home;
