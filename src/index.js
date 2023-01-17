import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.css';
//import AppsRoutes from './routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppsRoutes /> */}
    <Login/>
  </React.StrictMode>
);
