import React, { Component } from 'react';
import '../styles/header.css';


class Header extends Component {

    render() {
        return (
            <header className={this.props.title ? "header" : "header--hide"}>
                <h1>{this.props.title}</h1>                           
            </header>
        );
    }
}

export default Header;
