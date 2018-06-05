import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

class Footer extends Component {

    render() {
        return (
            <footer className="footer">
                <div className="footer__item">
                    <p className="lead">Location</p>
                    <p>Bergen Community College</p>
                    <p>400 Paramus Road</p>
                    <p>Paramus, NJ 07652</p>
                    <p>Room: S-315</p>
                </div>
                <div className="footer__item">
                    <p className="lead">Links</p>
                    <a className="footer__item-link" href="">Bergen Community College</a>
                    <a className="footer__item-link" href="">Running Start</a>
                    <a className="footer__item-link" href="">STEM Summit</a>
                </div>
                <div className="footer__item">
                    <p className="lead">Follow Us!</p>
                    <a className="footer__item-link" href="https://www.facebook.com/bergen.stem">Facebook</a>
                    <a className="footer__item-link" href="https://www.instagram.com/bergen_stem/">Instagram</a>
                </div>
            </footer>
        )
    }
}

export default Footer;
