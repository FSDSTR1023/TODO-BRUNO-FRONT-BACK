/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const StatusTasksPage = (status) => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [newStatus, setNewStatus] = useState('');
  const { tasks } = useTasks();

  const { user } = useAuth();
  console.log(user);

  const taskStatus = {
    pending: 'Pending Task',
    onprogress: 'In Progress Task',
    completed: 'Completed Task',
  };

  console.log(newStatus, ' <-- newStatus');
  console.log(Object.values(status).toLocaleString(), ' <-- status');
  console.log(tasks, ' <-- tasks');

  const filterTasks = async (tasks, newStatus) => {
    console.log(newStatus, ' <-- status dentro del useEffect');
    console.log(tasks, ' <-- tasks dentro del useEffect');
    const newFilteredTask = await tasks.filter(
      (task) => task.status === newStatus
    );
    console.log(newFilteredTask, ' <-- newFilteredTask');
    setFilteredTasks(newFilteredTask);
  };

  useEffect(() => {
    setNewStatus(Object.values(status).toLocaleString());
    filterTasks(tasks, newStatus);
  }, [status, newStatus, tasks]);

  return (
    <>
      <div className='flex flex-wrap gap-10 m-2 items-center justify-center p-10 '>
        {Object.keys(taskStatus).map((key, i) => {
          return (
            <Link
              to={`/tasks/${key}`}
              key={i}>
              <Button>{taskStatus[key]}</Button>
            </Link>
          );
        })}
      </div>
      <hr className=' bg-gray-100 border-1'></hr>
      <section className='flex flex-wrap gap-4 m-2 items-center justify-between'>
        {filteredTasks.map((task) => {
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

export default StatusTasksPage;
