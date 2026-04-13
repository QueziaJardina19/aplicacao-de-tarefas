import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import TaskList from '../components/TaskList';

const Home = () => {
  const { tasks } = useTasks();

  return (
    <div style={{ padding: '20px' }}>
      <h1>Gerenciador de Missões de Gatinho 🐱</h1>
      <Link to="/add-task">
        <button style={{ marginBottom: '20px' }}>🐾 Adicionar Nova Missão de Gatinho</button>
      </Link>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default Home;