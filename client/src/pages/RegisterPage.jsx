/* eslint-disable react-hooks/exhaustive-deps */
import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { singIn, isAuthenticated, errors: RegisterErrors } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigation('/profile');
    }
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (data) => {
    console.log(data, 'data');
    await singIn(data);
  });

  return (
    <div
      className='w-200 m-10 h-[calc(100vh-100px)]
     bg-zinc-800 p-10 rounded-md flex flex-col justify-center text-center'>
      {RegisterErrors &&
        RegisterErrors?.map((error, i) => (
          <div
            className='bg-red-500 p-2 rounded-md text-white w-200 m-2'
            key={i}>
            {error}
          </div>
        ))}
      <form onSubmit={onSubmit}>
        <label htmlFor='name'>Name:</label>
        <input
          className='w-full py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='text'
          placeholder='Name'
          {...register('name', { required: true })}
        />
        {errors.name && (
          <>
            <span className='text-red-500'>This field is required</span>
            <br />
          </>
        )}
        <label htmlFor='Surname'>Surname:</label>
        <input
          className='w-full py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='text'
          placeholder='Surname'
          {...register('surname', { required: true })}
        />
        {errors.surname && (
          <>
            <span className='text-red-500'>This field is required</span>
            <br />
          </>
        )}
        <label htmlFor='Username'>Username:</label>
        <input
          className='w-full py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='text'
          placeholder='Username'
          {...register('username', { required: true })}
        />
        {errors.username && (
          <>
            <span className='text-red-500'>This field is required</span>
            <br />
          </>
        )}
        <label htmlFor='Email'>Email:</label>
        <input
          placeholder='Email'
          className='w-full py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='email'
          {...register('email', { required: true })}
        />
        {errors.email && (
          <>
            <span className='text-red-500'>This field is required</span>
            <br />
          </>
        )}
        <label htmlFor='password'>Password:</label>
        <input
          placeholder='Password'
          className='w-full py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='password'
          {...register('password', { required: true })}
        />
        {errors.password && (
          <>
            <span className='text-red-500'>Password is Requiered</span>
            <br />
          </>
        )}
        <label htmlFor='confirmPassword'>Confirm Password:</label>
        <input
          placeholder='Confirm Password'
          className='w-full py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='password'
          {...register('confirmPassword', { required: true })}
        />
        {errors.confirmPassword && (
          <>
            <span className='text-red-500'>Password is Requiered</span>
            <br />
          </>
        )}

        <br />

        <button
          className='w-50 py-2  px-4  bg-zinc-700 rounded-md m-2'
          type='submit'>
          Register
        </button>
      </form>
      <p className='flex justify-center'>Allready an account? plese go to</p>
      <Link to='/login'>
        <em>
          <strong className='text-cyan-300'>-LogIn-</strong>
        </em>
      </Link>
    </div>
  );
};

export default RegisterPage;
