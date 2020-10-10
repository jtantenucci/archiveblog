import React, { Component } from 'react';
import MenuDrawer from './menudrawer'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Header from './header';
import Home  from './home';
import RafConsumed from './rafconsumed';

class Main extends Component {
    render() {
        return (
            <Router>
                <Header />
                <MenuDrawer />
                <Switch>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/rafconsumed">
                        <RafConsumed />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </Router>
        );
    }
}

export default withRouter(Main);
