import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import './App.css'
import App1 from './Render'
import UserCards from './User';
import './User.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   {/* <App1/> */}
   {<UserCards/>}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
