import { useTasks } from '../context/TaskContext';
import './TaskCard.css';
import { Link } from 'react-router-dom';
const TaskCard = ({ task }) => {
  const { deleteTask, setStatusTask } = useTasks();

  return (
    <article className='main-container'>
      <div className='user-info'>
        <div>
          <img
            className='user-img'
            src={task.user.avatar}
          />
          <p className='user-name'>{task.user.username}</p>
          <p className='status'>
            Status:{' '}
            {task.status === 'pending'
              ? 'Pending'
              : task.status === 'completed'
              ? 'Completed'
              : 'On Proggres'}
          </p>
        </div>
        <div className='btn-container'>
          <Link to={`/tasks/${task._id}`}>
            <button
              className='btn'
              onClick={() => console.log('Edit')}>
              Edit
            </button>
          </Link>
          <button
            onClick={() => deleteTask(task._id)}
            className='btn'>
            Delete
          </button>
        </div>
      </div>
      <div className='card-container'>
        <header className='btn-main-container'>
          <h1 className='title'>{task.title}</h1>
        </header>
        <div className='description_container'>
          <p className='description'>{task.description}</p>
        </div>
        <footer className='footer'>
          <p className='time'>
            Created at: {new Date(task.createdAt).toLocaleDateString()}
          </p>
          <p className='time'>
            Dead Line: {new Date(task.deadLine).toLocaleDateString()}
          </p>
        </footer>
        <div className='status-btn'>
          <button
            onClick={() => setStatusTask(task._id, 'completed', task)}
            value='completed'
            className='btn'>
            Set to Completed
          </button>
          <button
            onClick={() => setStatusTask(task._id, 'onProgress', task)}
            value='onProgress'
            className='btn'>
            Set to on Progress
          </button>
        </div>
      </div>
    </article>
  );
};

export default TaskCard;
