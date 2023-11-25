import axios from './axios';

export const getTasksRequest = () => axios.get(`/tasks`);

export const getCompletedTasksRequest = () => axios.get(`/tasks/completed`);

export const getPendingTasksRequest = () => axios.get(`/tasks/pending`);

export const getOnProgressTasksRequest = () => axios.get(`/tasks/onprogress`);

export const getTaskRequest = (id) => axios.get(`/tasks/${id}`);

export const createTaskRequest = (task) => axios.post(`/tasks`, task);

export const updateTaskRequest = (id, task) => axios.put(`/tasks/${id}`, task);

export const deleteTaskRequest = (id) => axios.delete(`/tasks/${id}`);
