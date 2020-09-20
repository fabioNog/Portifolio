import React , {Component} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';

class MyRoutes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={App}/>
                </Switch>
            </BrowserRouter>
            
        )
    }
}

export default MyRoutes;