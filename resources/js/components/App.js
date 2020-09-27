import React, {Component} from 'react';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

import Loader from './myComponents/Loader'

import Index from './myComponents/Index';
class app extends Component{    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>                
                <Index/>                
            </div>            
        )
    }
}

export default app;
