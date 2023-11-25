/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext, useEffect } from 'react';
import {
  registerRecuest,
  loginRecuest,
  verifyTokenRequest,
  updateUser,
} from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);

  const singIn = async (values) => {
    try {
      const response = await registerRecuest(values);
      console.log(response.data, 'response .data del singIn');
      setUser(response.data);
      setIsAuthenticated(true);
    } catch (error) {
      console.log(error.response.data);
      setErrors(error.response.data);
    }
  };
  const logIn = async (value) => {
    try {
      const response = await loginRecuest(value);
      console.log(response.data, 'response .data del logIn');
      setUser(response.data);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data.message]);
    }
  };
  const profileUpdate = async (id, newUser) => {
    console.log(id, 'id', newUser, 'user');
    console.log('a ver si encuentro este console.log');
    try {
      const response = await updateUser(id, newUser);
      console.log(response.data, 'response data del profileUpdate');
      setUser(response.data);
    } catch (error) {
      console.log(error.response.data);
      setErrors([error.response.data.message]);
    }
  };

  const logOut = () => {
    Cookies.remove('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (errors.length > 0) {
      const timer = setTimeout(() => {
        setErrors([]);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [errors]);

  useEffect(() => {
    async function checkLogin() {
      const cookie = Cookies.get();

      if (cookie.token) {
        try {
          const res = await verifyTokenRequest(cookie.token);
          if (!res.data) {
            setIsAuthenticated(false);
            setLoading(false);
            return;
          }
          setUser(res.data);
          setIsAuthenticated(true);
          setLoading(false);
        } catch (error) {
          setIsAuthenticated(false);
          setUser(null);
          setLoading(false);
        }
      }
    }
    checkLogin();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        singIn,
        user,
        isAuthenticated,
        errors,
        logIn,
        loading,
        logOut,
        profileUpdate,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
