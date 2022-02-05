import React from 'react';
import './Navigation.css';

class Navigation extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand navbar-dark bg-dark ">
                    <a className="navbar-brand myNavBrand" href="#">My Portfolio</a>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About Me</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resume</a>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navigation;