import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.length === 0 ? (
        <p>🐱 Nenhuma missão de gatinho ainda. Adicione uma nova aventura!</p>
      ) : (
        tasks.map(task => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;