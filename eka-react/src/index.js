import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppUseEffect from './components/AppUseEffect';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/*Vaihda tänne juuri komponentti*/}
    {/*<App />*/}
    <AppUseEffect />
  </React.StrictMode>
);
