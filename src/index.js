import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { ContextProvider } from './context/AppContext';
import './index.css';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>

//   </React.StrictMode>,
//   document.getElementById('root')
// );

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <Router>
      <App />
    </Router>
  </ContextProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
