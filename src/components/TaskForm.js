import React, { useState, useEffect } from 'react';
import './TaskForm.css';

const TaskForm = ({ initialTask, onSubmit }) => {
  const task = initialTask || {};
  const [title, setTitle] = useState(task.title || '');
  const [description, setDescription] = useState(task.description || '');
  const [completed, setCompleted] = useState(task.completed || false);

  useEffect(() => {
    const currentTask = initialTask || {};
    setTitle(currentTask.title || '');
    setDescription(currentTask.description || '');
    setCompleted(currentTask.completed || false);
  }, [initialTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return alert('Título é obrigatório');
    onSubmit({ title, description, completed });
    setTitle('');
    setDescription('');
    setCompleted(false);
  };

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Título:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título da tarefa"
          required
        />
      </div>
      <div className="form-group">
        <label>Descrição:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descreva a tarefa"
        />
      </div>
      <div className="form-group checkbox-field">
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
          id="completed"
        />
        <label htmlFor="completed">Concluída</label>
      </div>
      <div className="button-row">
        <button type="submit">Salvar Tarefa</button>
      </div>
    </form>
  );
};

export default TaskForm;