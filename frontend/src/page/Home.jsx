import React from 'react';
import ListTasks from '../components/ListTasks';
import NewTasks from '../components/NewTasks';

function Home() {
  return (
    <div>
      <NewTasks />
      <ListTasks />
    </div>
  )
};

export default Home;
