import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate, Link } from 'react-router-dom';

const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { addTask } = useContext(TaskContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(),
      title,
      description,
    };
    addTask(newTask);
    navigate('/');
  };

  return (
    <div>
      <h1>Adicionar Tarefa</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descrição:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Adicionar</button>
      </form>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default AddTask;