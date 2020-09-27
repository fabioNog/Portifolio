import React, {Component} from 'react'
import Loader from 'react-loader-spinner'


export default class index extends React.Component {
 //other logic
   render() {
    return(
      <Loader 
        type="Grid"
         color="black" 
         width={"570%"}
         height={"40%"} 
         timeout={1000}
         background={"red"} 
      />
    );
   }
}