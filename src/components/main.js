import React, { Component } from 'react';
import Header from './header';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

import Home from './home';

class Main extends Component {
    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </Router>
        );
    }
}

export default withRouter(Main);
