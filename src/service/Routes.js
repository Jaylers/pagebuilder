import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom'
import App from "../page/App";
import LoginPage from "../page/LoginPage";


class Routes extends Component{
    render() {
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={LoginPage} />
                <Route component={LoginPage} />
            </Switch>
        );
    }
}

export default Routes;
