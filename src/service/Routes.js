import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from "../page/App";
import LoginPage from "../page/LoginPage";
import Cookies from "universal-cookie";
import {Application} from "../utils/Constant";

export default function Routes() {
    const cookies = new Cookies();
    if (cookies.get(Application.APP_NAME)){
        return (
            <Switch>
                <Route exact path="/" component={App} />
                <Route exact path="/login" component={LoginPage} />
                <Route component={LoginPage} />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route exact path="/login" component={LoginPage} />
                <Route component={LoginPage} />
            </Switch>
        )
    }
}
