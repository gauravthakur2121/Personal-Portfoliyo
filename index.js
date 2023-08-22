import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // Assuming your main component is named App and is in a file named App.js
import './index.css'; // You can import your global CSS styles here

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
