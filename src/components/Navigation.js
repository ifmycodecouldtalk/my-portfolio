import React from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand navbar-dark bg-dark">
                    <a className="navbar-brand myNavBrand" href="#">My Portfolio</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Me</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume">Resume</Link>
                        </li>
                    </ul>
                </nav>
                <br /><br /><br /><br />
            </div>
        );
    }
}

export default Navigation;