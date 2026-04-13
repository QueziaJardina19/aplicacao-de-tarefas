import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';

const AddTask = () => {
  const { addTask } = useTasks();
  const navigate = useNavigate();

  const handleSubmit = (task) => {
    addTask(task);
    navigate('/');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Adicionar Nova Tarefa</h1>
      <TaskForm onSubmit={handleSubmit} />
      <button onClick={() => navigate('/')} style={{ marginTop: '10px' }}>Cancelar</button>
    </div>
  );
};

export default AddTask;