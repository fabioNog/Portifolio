import React , {Component} from "react";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Loader from './myComponents/Loader'

import {
    BrowserRouter,
    Routes,
    Route,
    useRoutes,
    Outlet
  } from 'react-router-dom';    

import App from './App';
import Login from './myComponents/Login'
/* import Teste from '../Teste'; */

function MyRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    );
  }

export default MyRoutes;