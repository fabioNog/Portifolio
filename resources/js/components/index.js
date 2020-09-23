import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import App from './App'
import About from './myComponents/About';
import Login from './myComponents/Login';

/* My Routes */
import Routes from './Routes'

export default class Index extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={App}/>
                <Route path="/login" component={Login}/>
            </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));

