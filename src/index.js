import React from 'react';
import './index.css';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import Acercade from './pages/Acercade';
import Contacto from './pages/Contacto';
import Personalizados from './pages/Personalizados';
import {
  Route,
  Navigate,
  BrowserRouter,
  Routes
} from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/Home' element={<Navigate replace to={"/"} />}></Route>
    <Route path='/Personalizados' element={<Personalizados/>}></Route>
    <Route path='/Acercade' element={<Acercade/>}></Route>
    <Route path='/Contacto' element={<Contacto/>}></Route>
  </Routes>
  </BrowserRouter>
);

