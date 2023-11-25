/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from 'react';
import { useState } from 'react';
import {
  createTaskRequest,
  getTasksRequest,
  deleteTaskRequest,
  getTaskRequest,
  updateTaskRequest,
  getCompletedTasksRequest,
  getPendingTasksRequest,
  getOnProgressTasksRequest,
} from '../api/task';

const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks debe estar dentro del proveedor TaskProvider');
  }
  return context;
};
export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  const createTask = async (task) => {
    await createTaskRequest(task);
  };

  const getTasks = async () => {
    const response = await getTasksRequest();
    console.log(response.data);
    setTasks(response.data);
  };

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      if (response.status === 204) {
        const newTasks = tasks.filter((task) => task._id !== id);
        setTasks(newTasks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const editTask = async (id, task) => {
    try {
      await updateTaskRequest(id, task);
    } catch (error) {
      console.error(error);
    }
  };
  const setStatusTask = async (id, status, task) => {
    try {
      const newTask = { ...task, status: status };
      console.log(newTask);
      await updateTaskRequest(id, newTask);
    } catch (error) {
      console.error(error);
    }
    getTasks();
  };

  const getCompletedTasks = async () => {
    try {
      const allTasks = await getCompletedTasksRequest();
      console.log(allTasks, 'allTasks');
      const completedTasks = allTasks.filter(
        (task) => task.status !== 'completed'
      );
      console.log(completedTasks);
      setTasks(completedTasks);
    } catch (error) {
      console.error(error);
    }
  };
  const getPendingTasks = async () => {
    try {
      const allTasks = await getPendingTasksRequest();
      const pendingTasks = allTasks.filter((task) => task.status !== 'pending');
      setTasks(pendingTasks);
    } catch (error) {
      console.error(error);
    }
  };

  const getOnProgressTasks = async () => {
    try {
      const allTasks = await getOnProgressTasksRequest();
      const onProgressTasks = allTasks.filter(
        (task) => task.status !== 'onProgress'
      );
      console.log(onProgressTasks);
      setTasks(onProgressTasks);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createTask,
        getTasks,
        deleteTask,
        getTask,
        editTask,
        setStatusTask,
        getCompletedTasks,
        getPendingTasks,
        getOnProgressTasks,
      }}>
      {children}
    </TaskContext.Provider>
  );
}
