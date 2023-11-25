/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import { useEffect, useState } from 'react';
import TaskCard from '../components/TaskCard';

const StatusTasksPage = (status) => {
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [newStatus, setNewStatus] = useState('');
  const { tasks } = useTasks();

  const { user } = useAuth();
  console.log(user);

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
  );
};

export default StatusTasksPage;
