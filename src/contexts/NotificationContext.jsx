import { createContext, useState } from 'react';

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  const handleError = (error) => {
    setOpen(true);
    setSeverity('error');
    setMessage(`Error: ${error.response.data.error}`);
  };

  return (
    <NotificationContext.Provider
      value={{
        open,
        setOpen,
        message,
        setMessage,
        severity,
        setSeverity,
        handleError,
      }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContext;
