import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { setToken } from './services/api';
import { getAllImages } from './features/imageSlice';
import { getCloudName } from './features/cloudinarySlice';
import { setCredentials } from './features/userSlice';
import { getToken } from './services/authStorage';
import { disableReactDevTools } from '@fvilers/disable-react-devtools';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCloudName());
    dispatch(getAllImages());
  }, [dispatch]);

  useEffect(() => {
    const loggedUser = getToken();
    if (loggedUser) {
      dispatch(setCredentials(loggedUser));
      setToken(loggedUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
