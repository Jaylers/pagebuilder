import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from "../page/App";
import LoginPage from "../page/LoginPage";
import NotFoundPage from "../page/NotFoundPage";
import RegisterPage from "../page/RegisterPage";
import ForgetPage from "../page/ForgetPage";
import {Path} from "../utils/Constant";

export default function Routes() {
    return (
        <Switch>
            <Route exact path={"/" } component={App} />
            <Route exact path={"/" + Path.login} component={LoginPage} />
            <Route exact path={"/" + Path.register} component={RegisterPage} />
            <Route exact path={"/" + Path.forget} component={ForgetPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
}
