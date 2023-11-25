/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { logIn, errors: singInErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    logIn(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/profile');
  }, [isAuthenticated]);

  return (
    <div
      className='w-200 h-[calc(100vh-100px)] m-10 bg-zinc-800 p-10 
    rounded-md flex flex-col justify-center text-center'>
      {singInErrors &&
        singInErrors.map((error, i) => (
          <div
            className='bg-red-500 p-2 rounded-md text-white w-200 m-2'
            key={i}>
            {error}
          </div>
        ))}
      <h1 className='text-2xl font-bold text-cyan-300'>Login</h1>
      <form onSubmit={onSubmit}>
        <input
          placeholder='Email'
          className='w-full py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='email'
          {...register('email', { required: true })}
        />
        {errors.email && (
          <span className='text-red-500'>This field is required</span>
        )}
        <input
          placeholder='Password'
          className='w-full py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='password'
          {...register('password', { required: true })}
        />
        {errors.password && (
          <span className='text-red-500'>Password is Requiered</span>
        )}

        <br />

        <button
          className='w-50 py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='submit'>
          LogIn
        </button>
      </form>
      <p className='flex justify-center'>Do not have an account? plese go to</p>
      <Link to='/register'>
        <em>
          <strong className='text-cyan-300'>-Register-</strong>
        </em>
      </Link>
    </div>
  );
};

export default LoginPage;
