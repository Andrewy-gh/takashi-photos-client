import { useState } from 'react';
import { login } from '../services/auth';

export function useAuth() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [token, setToken] = useState(null);

  const handleLogin = async (credentials) => {
    const userToken = await login(credentials);
    setLoggedIn(true);
    setToken(userToken);
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setToken(null);
  };

  return { loggedIn, token, handleLogin, handleLogout };
}

export default useAuth;
