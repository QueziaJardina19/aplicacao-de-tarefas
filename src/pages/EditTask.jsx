import React, { useState, useContext, useEffect } from 'react';
import { TaskContext } from '../context/TaskContext';
import { useNavigate, useParams, Link } from 'react-router-dom';

const EditTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const { tasks, editTask } = useContext(TaskContext);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const task = tasks.find(t => t.id === parseInt(id));
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [id, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTask({
      id: parseInt(id),
      title,
      description,
    });
    navigate('/');
  };

  return (
    <div>
      <h1>Editar Tarefa</h1>
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
        <button type="submit">Salvar</button>
      </form>
      <Link to="/">Voltar</Link>
    </div>
  );
};

export default EditTask;