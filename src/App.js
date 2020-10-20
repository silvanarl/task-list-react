import React from 'react';
import Task from './components/Task';
import './App.css';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="App">
      <header>Task List App</header>
      <main>
        <Task />
        <TaskList />
      </main>
    </div>
  );
};

export default App;
