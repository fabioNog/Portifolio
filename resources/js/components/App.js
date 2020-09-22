import React, {Component} from 'react';

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
