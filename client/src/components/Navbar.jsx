import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
const Navbar = () => {
  const { isAuthenticated, logOut, user } = useAuth();

  return (
    <nav className='bg-zinc-700 my-3 flex ali justify-between py-5 px-10 rounded-lg items-center'>
      <Link to='/profile'>
        <h1 className='text-2xl font-bold'>Task Manager</h1>
        {isAuthenticated ? (
          <p>Welcome {user.username}</p>
        ) : (
          <p>Please LogIn Or Register</p>
        )}
      </Link>
      <ul className='flex gap-x-4 decoration-none'>
        {isAuthenticated ? (
          <>
            <li className=' hover:text-cyan-400'>
              <Link to='/tasks'>Tasks</Link>
            </li>
            |
            <li className=' hover:text-cyan-400'>
              <Link to='/tasks/completed'>Completed Tasks</Link>
            </li>
            |
            <li className=' hover:text-cyan-400'>
              <Link to='/tasks/pending'>Pending Tasks</Link>
            </li>
            |
            <li className=' hover:text-cyan-400'>
              <Link to='/tasks/onprogress'>On Progress Tasks</Link>
            </li>
            |
            <li className=' hover:text-cyan-400'>
              <Link to='/add-tasks'>Add-Task</Link>
            </li>
            |
            <li className=' hover:text-cyan-400'>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link
                className='bg-cyan-500 px-4 py-1 rounded-sm'
                onClick={logOut}>
                LogOut
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link
                className='bg-cyan-500 px-4 py-1 rounded-sm'
                to='/login'>
                Log In
              </Link>
            </li>
            <li>
              <Link
                className='bg-cyan-500 px-4 py-1 rounded-sm'
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
