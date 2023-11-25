/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import { useTasks } from '../context/TaskContext';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

dayjs.extend(utc);

const TaskFormPage = () => {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, editTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function fetchTask() {
      if (params.id) {
        const fechedTask = await getTask(params.id);
        setValue('title', fechedTask.title);
        setValue('description', fechedTask.description);
        setValue('isPrivate', fechedTask.isPrivate);
        setValue('status', fechedTask.status);
        setValue(
          'deadLine',
          dayjs(fechedTask.deadLine).utc().format('YYYY-MM-DD')
        );
      }
    }
    fetchTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    if (params.id) {
      console.log(data);
      editTask(params.id, data);
    } else {
      createTask({
        ...data,
        deadLine: dayjs(data.deadLine).utc().format(),
      });
    }
    navigate('/tasks');
  });

  return (
    <article className='w-full flex items-center justify-center mt-10 bg-zinc-700 h-full p-10 '>
      <div
        className=' max-w-md w-full p-10 
      rounded-md shadow-md justify-center items-center flex flex-col justify-self-center
     bg-zinc-800 '>
        {params.id ? (
          <h1 className='text-2xl text-white'>Edit Task</h1>
        ) : (
          <h1 className='text-2xl text-white'>New Task</h1>
        )}
        <form onSubmit={onSubmit}>
          <label htmlFor='title'>Title</label>
          <input
            className='m-2 w-full text-white px-4 py-2 rounded-md bg-zinc-700'
            type='text'
            placeholder='Titulo'
            {...register('title')}
            autoFocus
          />
          <br />
          <label htmlFor='description'>Description</label>
          <textarea
            className='m-2 w-full text-white px-4 py-2 rounded-md bg-zinc-700'
            rows='6'
            placeholder='Descripcion'
            {...register('description')}></textarea>
          <br />
          <label htmlFor='date'>Dead Line</label>
          <input
            className='m-2 w-full text-white px-4 py-2 rounded-md bg-zinc-700'
            type='date'
            {...register('deadLine')}
          />
          <div className='checkbok-container flex items-center px-2'>
            <input
              className='w-4 h-4 m-3  text-gray-600 bg-gray-100 border-gray-300 rounded-md
             focus:ring-grey-500 dark:focus:ring-white-600 dark:ring-offset-gray-800 
             focus:ring-2 dark:bg-gray-700 dark:border-gray-600 '
              type='checkbox'
              name='isPrivate'
              id='isPrivate'
              {...register('isPrivate')}
            />
            <label
              htmlFor='isPrivate'
              className='ms-2 text-sm font-medium text-gray-100 dark:text-gray-300 '>
              Make this task public
            </label>
          </div>
          <br />
          <div className='isPrivate-container'>
            <label
              htmlFor='status'
              className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'>
              Select an option
            </label>
            <select
              {...register('status')}
              id='status'
              className='bg-gray-500 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'>
              <option selected>Choose a status</option>
              <option value='pending'>Pending Task</option>
              <option value='onProgress'>On Proggres Task</option>
              <option value='completed'>Completed Task</option>
            </select>
          </div>
          <button
            className='rounded-md bg-white/10 px-2.5 py-1.5 text-sm font-semibold shadow-sm hover:bg-white/20 mt-3'
            type='submit'>
            Save Task
          </button>
        </form>
      </div>
    </article>
  );
};

export default TaskFormPage;
