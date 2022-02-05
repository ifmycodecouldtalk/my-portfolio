import React from 'react';
import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="greeter text-center">
                <h1 className="display-1">Who Is Chris Martinez?</h1>
                <p className="subtext"><i>A Portfolio of All Projects I Have Worked On</i></p>
            </div>
        );
    }
};

export default Home;