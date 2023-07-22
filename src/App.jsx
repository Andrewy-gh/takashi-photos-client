import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import { setToken } from './services/api';
import { getToken } from './services/authStorage';

import { useAuth } from './hooks/useAuth';
import { useCloudinary } from './hooks/useCloudinary';
import { useImage } from './hooks/useImage';
import RequireAuth from './components/RequireAuth';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
if (process.env.NODE_ENV === 'production') disableReactDevTools();

export default function App() {
  const { cloudName } = useCloudinary();
  const {
    images,
    updateImageOrder,
    uploadNewImage,
    updateImageDetails,
    removeOneImage,
  } = useImage();
  const { loggedIn, token, handleLogin, handleLogout, setCredentials } =
    useAuth();

  useEffect(() => {
    const loggedUser = getToken();
    if (loggedUser) {
      setCredentials(loggedUser);
      setToken(loggedUser);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Home
              cloudName={cloudName}
              images={images}
              loggedIn={loggedIn}
              handleLogout={handleLogout}
              token={token}
            />
          }
        />
        <Route
          path="/login"
          element={
            <Login
              loggedIn={loggedIn}
              token={token}
              handleLogin={handleLogin}
            />
          }
        />
        <Route element={<RequireAuth token={token} loggedIn={loggedIn} />}>
          <Route
            path="/edit"
            element={
              <Edit
                cloudName={cloudName}
                images={images}
                updateImageOrder={updateImageOrder}
                updateImageDetails={updateImageDetails}
                uploadNewImage={uploadNewImage}
                removeOneImage={removeOneImage}
              />
            }
          />
        </Route>
        <Route
          path="/profile"
          element={<Profile loggedIn={loggedIn} token={token} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
