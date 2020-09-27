
import React, { Component,Redirect   } from 'react';


import { Link } from 'react-router-dom';

import Login from './login';
import Loader from './loader';


function Index() {

    return (
        <div>        
            <Login />
        </div>
    );
}

export default Index;