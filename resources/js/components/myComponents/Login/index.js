import React, { Component } from 'react';

import {Link} from 'react-router-dom';

function Login() {

    return (
        <div>
            <Link to='/' style={{color: "black"}}>Inicio</Link>   
            <h1 style={{color: "black"}}>Hello World</h1>
        </div>
    );
}

export default Login