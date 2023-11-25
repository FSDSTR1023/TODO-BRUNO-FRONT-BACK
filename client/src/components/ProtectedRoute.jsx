import { useAuth } from '../context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const { loading, user, isAuthenticated } = useAuth();
  console.log(user, isAuthenticated);
  if (loading) return <div>Loading...</div>;

  if (!loading && !isAuthenticated)
    return (
      <Navigate
        to='/login'
        replace
      />
    );

  return <Outlet />;
};

export default ProtectedRoute;
