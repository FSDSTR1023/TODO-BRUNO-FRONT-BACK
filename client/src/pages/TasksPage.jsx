/* eslint-disable react-hooks/exhaustive-deps */
import { useAuth } from '../context/AuthContext';
import { useTasks } from '../context/TaskContext';
import { useEffect } from 'react';
import TaskCard from '../components/TaskCard';

const TasksPage = () => {
  const { getTasks, tasks } = useTasks();
  const { user } = useAuth();
  console.log(user);
  useEffect(() => {
    getTasks();
  }, []);

  return (
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
  );
};

export default TasksPage;
//}
