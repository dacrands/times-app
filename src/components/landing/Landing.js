import React, {Component} from "react";
import { Link } from "react-router-dom";

import Info from './Info';
import Content from './Content';
import Video from '../Video';
import Header from './Header';
import Trianglify from "./Triangle";

import '../../styles/info.css'

class Landing extends Component {

    constructor(props){
        super(props);
        this.state = {
          scriptHTML: Trianglify
        };
    }

    componentDidMount() {
        console.log('landing')
        this.setState({ scriptHTML:Trianglify });    
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.innerHTML = this.state.scriptHTML;
        document.body.appendChild(script);
    }


    render() {
        return (
            <div>
                <Header />
                <Info className="info"/>
                <Content />
            </div>            
        );
    }
};

export default Landing;