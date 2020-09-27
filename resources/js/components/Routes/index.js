import React , {Component} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import Login from '../myComponents/Login';
/* import Teste from '../Teste'; */

class MyRoutes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                    <Route  path="/login" component={Login}/>
                </Switch>
            </BrowserRouter>            
        )
    }
}

export default MyRoutes;