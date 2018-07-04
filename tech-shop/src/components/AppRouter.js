import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Register from './User/Register/Register';
import Login from './User/Login/Login';
import Logout from './User/Logout/Logout';
import HomePageContent from './Content/HomePageContent';
import AllUsers from './User/All/AllUsers';
import NotFound from './NotFound/NotFound';

export default class AppRouter extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/" exact component={HomePageContent} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/logout" exact component={Logout} />
                    <Route path="/users" exact component={AllUsers} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        )
    }
}