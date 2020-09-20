import React, {Component} from 'react';

import Header from './myComponents/header'
import Loader from './myComponents/loader'
import Main from './myComponents/main'


class app extends Component{    
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <Loader/>
                <Header/>
                <Main/>
            </div>            
        )
    }
}

export default app;