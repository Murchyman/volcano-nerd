import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import Home from './routes/Home';
import Search from './routes/Search';
import Volcano from './routes/Volcano';
import Login from './routes/Login';
import Register from './routes/Register';
import Navbar from './Components/Navbar';
import Logout from './routes/Logout';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="volcano/:volcanoID" element={<Volcano />} />
      <Route path="login" element={<Login />} />
      <Route path="Logout" element={<Logout />} />
      <Route path="register" element={<Register />} />
    </Routes>
  </BrowserRouter>,
);


