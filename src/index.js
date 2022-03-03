import React from 'react';
import { ThemeProvider } from 'styled-components';
import ReactDOM from 'react-dom';
import { theme } from './styles/theme';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
