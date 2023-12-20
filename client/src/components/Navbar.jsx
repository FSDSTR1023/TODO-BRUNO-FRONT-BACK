import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Navbar = () => {
  const { isAuthenticated, logOut, user } = useAuth();

  return (
    <nav className='flex  p-2 text-lg text-white bg-indigo-600 '>
      <div className='text-mono w-80'>
        <Link to='/'>
          <h1 className='text-2xl font-bold ml-4'>Task Manager</h1>
          {isAuthenticated ? (
            <div className='flex flex-row items-center'>
              <p className='ml-4'>Welcome {user.username}</p>
              <img
                className='w-10 h-10 rounded-full ml-4'
                src={user.avatar}
              />
            </div>
          ) : (
            <p className='ml-4'>Please LogIn Or Register</p>
          )}
        </Link>
      </div>
      <ul className=' w-full flex flex-row justify-end items-center text-center gap-8 mr-8'>
        {isAuthenticated ? (
          <>
            <li className=' hover:text-cyan-400 text-sm'>
              <Link to='/tasks'>Tasks</Link>
            </li>
            |
            <li className=' hover:text-cyan-400 text-sm'>
              <Link to='/add-tasks'>Add-Task</Link>
            </li>
            |
            <li className=' py-1 rounded-sm text-md hover:text-cyan-400'>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link
                className='py-1 rounded-sm text-md hover:text-cyan-400'
                onClick={logOut}>
                LogOut
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                className=' py-1 rounded-sm text-md hover:text-cyan-400'
                to='/login'>
                LogIn
              </Link>
            </li>
            <li>
              <Link
                className='py-1 rounded-sm text-md hover:text-cyan-400'
                to='/register'>
                Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
