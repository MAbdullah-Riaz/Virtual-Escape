import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AuthContextContainer from './context/auth-context/AuthContainer';
import './index.scss';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextContainer>
        <App />
      </AuthContextContainer>
    </BrowserRouter>
  </React.StrictMode>
);
