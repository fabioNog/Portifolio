import React , {Component} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from '../App';
import { divide } from "lodash";

class MyRoutes extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div id="preloader-active">
            <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
            <div className="preloader-circle"></div>
            <div className="preloader-img pere-text">
                <img src="assets/img/logo/loder.jpg" alt=""/>
            </div>
        </div>
    </div>
</div>
            
        )
    }
}

export default MyRoutes;