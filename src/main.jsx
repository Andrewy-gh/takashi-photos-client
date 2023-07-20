import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { theme } from './styles/styles';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={responsiveFontSizes(theme)}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
