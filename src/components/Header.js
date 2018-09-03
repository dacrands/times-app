import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <NavLink className={"header--navlink"} activeClassName="active" exact to="/">
                <div className={"header"} id="headerMain">
                    
                        <div className="container">
                            <h1 className={"header__title"}>New York Times App</h1>
                        </div>                    
                    
                </div>
            </NavLink>
        );
    }
}