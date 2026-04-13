import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Link } from 'react-router-dom';

const Home = () => {
  const { tasks, removeTask } = useContext(TaskContext);

  return (
    <div>
      <h1>Lista de Tarefas</h1>
      <Link to="/add-task">Adicionar Tarefa</Link>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <strong>{task.title}</strong>: {task.description}
            <button onClick={() => removeTask(task.id)}>Excluir</button>
            <Link to={`/edit-task/${task.id}`}>Editar</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;