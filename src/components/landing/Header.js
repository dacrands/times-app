import React, { Component } from "react";
import "../../styles/landing-header.css";

class Header extends Component{
  

  componentDidMount(){
    console.log('header');
    const triangle = document.createElement('script');
    triangle.src = 'https://cdnjs.cloudflare.com/ajax/libs/trianglify/0.4.0/trianglify.min.js'
    triangle.type = 'text/javascript'
    document.body.appendChild(triangle);
    
  }
  
  render(){
    return(
      <header className="landing__header" id="landingHeader">
        <div className="overlay">
          Bergen STEM
        </div>
        <canvas id="myCanvas"></canvas>
      </header>
    )
  }
}

export default Header;
