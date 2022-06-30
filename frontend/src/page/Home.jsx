import React from 'react';
import ListTasks from '../components/ListTasks/ListTasks';
import NewTasks from '../components/NewTasks/NewTasks';
import SearchTask from '../components/SearchTasks/SearchTask';
import './Home.css';

function Home() {
  return (
    <div className="homeTasks">
      <div>
        <NewTasks />
        <SearchTask />
      </div>
      <ListTasks />
    </div>
  )
};

export default Home;
