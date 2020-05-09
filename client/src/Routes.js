// REACT
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// PAGES
import Nav from './core/Nav';
import Home from './core/Home';
import Login from './user/Login';
import Register from './user/Register';

const Routes = () => {
    return (
        <BrowserRouter>
            <Nav />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/login' exact component={Login} />
                <Route path='/register' exact component={Register} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;