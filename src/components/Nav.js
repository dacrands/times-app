import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
            <nav className="nav  container">
                <ul className="nav__list">
                    <li className="nav__list-item">
                        <NavLink
                            exact to="/"
                            activeClassName="active"
                        >Best Sellers</NavLink>
                    </li>
                    <li className="nav__list-item">
                        <NavLink
                            to="/archives"
                            activeClassName="active"
                        >Archives</NavLink>
                    </li>
                    <li className="nav__list-item">
                        <NavLink
                            to="/popular"
                            activeClassName="active"
                        >Best Sellers</NavLink>
                    </li>
                    
                </ul>
            </nav>
        );
    }
}