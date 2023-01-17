import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Login />}  ></Route>
          <Route path="/cadastro" element={<Cadastro />}  ></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
