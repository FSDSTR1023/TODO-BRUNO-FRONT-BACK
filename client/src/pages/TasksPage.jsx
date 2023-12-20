/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import { useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const TasksPage = () => {
  const { getTasks, tasks } = useTasks();
  const { user } = useAuth();

  const status = {
    pending: 'Pending Task',
    onprogress: 'In Progress Task',
    completed: 'Completed Task',
  };

  console.log(user);
  useEffect(() => {
    getTasks();
  }, []);

  return (
    <>
      <div className='flex flex-wrap gap-10 m-2 items-center justify-center p-10 '>
        {Object.keys(status).map((key, i) => {
          return (
            <Link
              to={`/tasks/${key}`}
              key={i}>
              <Button>{status[key]}</Button>
            </Link>
          );
        })}
      </div>
      <hr className=' bg-gray-100 border-1'></hr>
      <section className='flex flex-wrap gap-4 m-2 items-center justify-between p-10'>
        {tasks.map((task) => {
          return (
            <TaskCard
              task={task}
              key={task._id}
            />
          );
        })}
      </section>
    </>
  );
};

export default TasksPage;
//}
