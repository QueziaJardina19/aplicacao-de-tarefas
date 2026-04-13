import React from 'react';
import { Link } from 'react-router-dom';
import { useTasks } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { removeTask, toggleComplete } = useTasks();

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h3 style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h3>
        <p>{task.description}</p>
        <label>
          <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id)} />
          Concluída
        </label>
      </div>
      <div>
        <Link to={`/edit-task/${task.id}`}>
          <button>Editar</button>
        </Link>
        <button onClick={() => removeTask(task.id)} style={{ marginLeft: '10px', color: 'red' }}>Excluir</button>
      </div>
    </div>
  );
};

export default TaskItem;