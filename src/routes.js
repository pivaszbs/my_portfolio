import React from 'react';
import { Switch, Route } from 'react-router';
import Antoha from './components/app/Antoha';
import Leha from './components/app/Leha';
import Menu from './components/app/Menu';
const Routes = () => {
    return (
        <Switch>
            <Route exact component={Menu} path="/" />
            <Route exact component={Antoha} path="/antoha" />
            <Route exact component={Leha} path="/leha" />
        </Switch>
    );
};

export default Routes;