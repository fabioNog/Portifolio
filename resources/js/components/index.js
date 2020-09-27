import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import App from './App'
import About from './myComponents/About';
import Login from './myComponents/Login';

/* My Routes */
import Routes from './Routes'

ReactDOM.render(<Routes/>, document.getElementById('app'));

