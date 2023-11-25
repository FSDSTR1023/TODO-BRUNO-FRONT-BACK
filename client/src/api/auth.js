import axios from './axios';

export const registerRecuest = (user) => axios.post(`/register`, user);

export const loginRecuest = (user) => axios.post(`/login`, user);

export const verifyTokenRequest = () => axios.get(`/verify`);

export const updateUser = (id, user) => axios.patch(`/users/${id}`, user);
