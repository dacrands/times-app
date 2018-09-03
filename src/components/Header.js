import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div className={"header"}>
                <NavLink className={"header--navlink"} exact to="/">
                    <h1 className={"container"}>New York Times App</h1>
                </NavLink>                
            </div>
        );
    }
}