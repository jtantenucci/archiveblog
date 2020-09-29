import React, { Component } from 'react';
import { Jumbotron } from 'reactstrap';
import Example from './map';

class Home extends Component {
    render() {
        return(
            <div className="homepage">
                <Jumbotron fluid className="homepage-jumbotron">
                    <div className="container fluid homepage">
                        <h1 className="display-3">flatmap</h1>
                        <p className="lead">searching for a proper moodboard</p>
                    </div>
                </Jumbotron>
                <Example />
            </div>
        );
    }
}

export default Home;