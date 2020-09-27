import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


/* My Routes */
import Routes from './Routes'

ReactDOM.render(<Routes />, document.getElementById('app'));

