import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';
import TaskForm from '../components/TaskForm';

const EditTask = () => {
  const { tasks, editTask } = useTasks();
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const foundTask = tasks.find(t => t.id === parseInt(id));
    if (foundTask) setTask(foundTask);
  }, [id, tasks]);

  const handleSubmit = (updatedTask) => {
    editTask({ ...updatedTask, id: parseInt(id) });
    navigate('/');
  };

  if (!task) return <div>🐱 Carregando missão...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>✏️ Editar Missão de Gatinho</h1>
      <TaskForm initialTask={task} onSubmit={handleSubmit} />
      <button onClick={() => navigate('/')} style={{ marginTop: '10px' }}>🏠 Voltar para Casa</button>
    </div>
  );
};

export default EditTask;