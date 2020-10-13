import React, { Component } from 'react';
import MenuDrawer from './menudrawer'
import Header from './header';
import Home  from './home';
import ConsumedGallery from './galleries/ConsumedGallery';
import FearGallery from './galleries/FearGallery';
import VirginiaGallery from './galleries/VirginiaGallery';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

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
                    <Route path="/ConsumedGallery">
                        <ConsumedGallery />
                    </Route>
                    <Route path="/FearGallery">
                        <FearGallery />
                    </Route>
                    <Route path="/VirginiaGallery">
                        <VirginiaGallery />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </Router>
        );
    }
}

export default withRouter(Main);
