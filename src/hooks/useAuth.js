import { useContext, useState } from 'react';
import { login } from '../services/auth';
import { removeToken } from '../services/authStorage';
import { NotificationContext } from '../contexts/NotificationContext';
import { tryCatch } from '../utils/tryCatch';

export function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);
  const { setOpen, setMessage, setSeverity, handleError } =
    useContext(NotificationContext);

  const handleLogin = async (credentials) => {
    await tryCatch(async () => {
      const userToken = await login(credentials);
      if (userToken) {
        setLoggedIn(true);
        setToken(userToken);
        setOpen(true);
        setMessage('Successfully logged in');
      }
    }, handleError);
  };

  // const handleLogin = async (credentials) => {
  //   try {
  //     const userToken = await login(credentials);
  //     if (userToken) {
  //       setLoggedIn(true);
  //       setToken(userToken);
  //       setOpen(true);
  //       setMessage('Successfully logged in');
  //     }
  //   } catch (error) {
  //     setOpen(true);
  //     setSeverity('error');
  //     setMessage(`Error logging in: ${error.response.data.error}`);
  //   }
  // };

  const handleLogout = () => {
    setOpen(true);
    setMessage('Successfully logged out');
    setLoggedIn(false);
    setToken(null);
    removeToken();
  };

  const setCredentials = (credentials) => {
    setLoggedIn(true);
    setToken(credentials);
  };

  return { loggedIn, token, handleLogin, handleLogout, setCredentials };
}

export default useAuth;
