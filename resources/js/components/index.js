import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Routes from './Routes'
import App from './App'
import Teste from './Teste'

export default class Index extends Component{
    render(){
        return(
            <Router>
                <Route exact path="/" component={App}/>
                <Route path="/teste" component={Teste}/>
            </Router>
        )
    }
}

ReactDOM.render(<Index />, document.getElementById('app'));

