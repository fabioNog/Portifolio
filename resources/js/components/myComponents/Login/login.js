import React, { Component } from 'react';

import {Link,Redirect,useHistory} from 'react-router-dom';



function Login() {
    let history = useHistory();

    function handleClick() {
      history.push("/");
    }
    return (
        <div>
            <button  style={{color: "black"}} onClick={handleClick}>Inicio</button>   
            <h1 style={{color: "black"}}>Hello World</h1>
        </div>
    );
}

export default Login;