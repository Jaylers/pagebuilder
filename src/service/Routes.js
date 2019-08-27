import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from "../page/App";
import LoginPage from "../page/LoginPage";
import NotFoundPage from "../page/NotFoundPage";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/create" component={LoginPage} />
            <Route exact path="/forgot" component={LoginPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
}
