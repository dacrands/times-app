import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

import '../styles/menu.css';


class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = {
            mobileMenu: false,
            menuHeight: 50
        }
    }

    componentDidMount() {
        this.setState({ menuHeight: this.refs.menu.clientHeight });
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768) {
                this.setState({ menuHeight: this.refs.menu.clientHeight });
            };
        });
    }

    toggleMenu() {
        const pattyList = this.refs.patties.childNodes;
        const pattyListBool = pattyList[0].classList.contains('patty--collapse-1');

        const orderPatties = (arr, bool) => {
            if (bool) {
                var numOne = 1; var numTwo = 2;
            } else { var numOne = 2; var numTwo = 1; };

            arr.forEach((patty) => {
                setTimeout(() => {
                    patty.classList.toggle(`patty--collapse-${numOne}`);
                }, 150);
                patty.classList.toggle(`patty--collapse-${numTwo}`);
            });
        }

        this.setState({ mobileMenu: !pattyListBool });
        orderPatties(pattyList, pattyListBool);
    }

    render() {
        return (
            <nav className="menu" ref="menu">
                <div className="menu__logo">
                    <NavLink
                        exact
                        to="/"
                        className="menu__link"
                        activeClassName='menu__link--active'
                    >
                        BCC
                    </NavLink>
                </div>
                <ul
                    className={this.state.mobileMenu ? "menu__list menu__list--show" : "menu__list"}
                    style={{ top: `${this.state.menuHeight}px` }}
                >
                    <li className="menu__list-item">
                        <NavLink
                            exact
                            to="/benefits"
                            className="menu__list-link"
                            activeClassName='menu__link--active'
                        >
                            About
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink
                            to="/3sp"
                            className="menu__list-link"
                            activeClassName='menu__link--active'
                        >
                            STEM Student Scholars
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <NavLink
                            to="/contact"
                            className="menu__list-link"
                            activeClassName='menu__link--active'
                        >
                            Contact
                        </NavLink>
                    </li>
                    <li className="menu__list-item">
                        <button
                            className="menu__list-link menu__button"
                            id="dropdownButton"                            
                        >
                            Resources&#x25BE;
                        </button>
                        <ul className="menu__dropdown">
                            <li className="menu__dropdown-item">
                                <Link
                                    className="menu__list-link"
                                    to="/3sp"

                                >
                                    STEM Student Scholars
                                </Link>
                                {/* <a className="menu__dropdown-link" href="">Other stuff</a> */}
                            </li>
                            <li className="menu__dropdown-item">
                                <a
                                    className="menu__list-link"
                                    href="https://bergen.edu/faculty-staff/grants-administration/awards/stem/running-start-program/"
                                >
                                    Running Start Program
                                </a>
                            </li>
                            <li className="menu__dropdown-item">
                                <a
                                    className="menu__list-link"
                                    href="http://bergen.edu/stemsummit"
                                >
                                    STEM Summit
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className="menu__burger">
                    <button
                        className="menu__button"
                        aria-label="menu button"
                        onClick={this.toggleMenu.bind(this)}>
                        <div ref="patties" className="patties">
                            <div className="patty"></div>
                            <div className="patty"></div>
                        </div>
                    </button>
                </div>
            </nav>
        );
    }
}

export default Menu;
