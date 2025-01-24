import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login} from './pages/login'
import {Home} from './pages/home'
import {RecuperarSenha} from './pages/recuperar-senha'
import { Cadastrar } from './pages/cadastro';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/recuperar-senha" element={<RecuperarSenha />}></Route>
        <Route path="/cadastrar" element={<Cadastrar />}></Route>

      </Routes>
    </Router>
  );
};

export default AppRoutes;
