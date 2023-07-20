import { useLocation, Navigate, Outlet } from 'react-router-dom';

export default function RequireAuth({ token, loggedIn }) {
  const location = useLocation();
  return (
    <>
      {token && loggedIn ? (
        <Outlet />
      ) : (
        <Navigate to="/login" state={{ from: location }} replace />
      )}
      ;
    </>
  );
}
