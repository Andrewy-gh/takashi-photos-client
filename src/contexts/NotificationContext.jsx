import { createContext, useState } from 'react';

export const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState('success');
  const handleError = (error) => {
    const errorMessage = error?.response?.data?.error || error;
    setOpen(true);
    setSeverity('error');
    setMessage(`Error: ${errorMessage}`);
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
