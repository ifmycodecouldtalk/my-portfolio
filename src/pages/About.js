import React from 'react';
import './About.css';

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="about-page text-center">
                <h1 className="display-2">About Me</h1>
            </div>
        );
    }
};

export default About;