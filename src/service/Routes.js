import React from 'react'
import {Route, Switch} from 'react-router-dom'
import App from "../page/App";
import LoginPage from "../page/LoginPage";
import NotFoundPage from "../page/NotFoundPage";
import RegisterPage from "../page/RegisterPage";
import ForgetPage from "../page/ForgetPage";
import {Action, Application} from "../utils/Constant";
import Cookies from "universal-cookie";

export default function Routes() {
    const cookies = new Cookies();
    let user = cookies.get(Application.USER);

    if (user){
        return (
            <Switch>
                <Route exact path={"/" } component={App} />
                <Route exact path={"/" + Action.login} component={LoginPage} />
                <Route exact path={"/" + Action.register} component={RegisterPage} />
                <Route exact path={"/" + Action.forget} component={ForgetPage} />
                <Route component={NotFoundPage} />
            </Switch>
        );
    } else {
        return (
            <Switch>
                <Route exact path={"/" } component={LoginPage} />
                <Route exact path={"/" + Action.login} component={LoginPage} />
                <Route exact path={"/" + Action.register} component={RegisterPage} />
                <Route exact path={"/" + Action.forget} component={ForgetPage} />
                <Route component={NotFoundPage} />
            </Switch>
        );
    }

}
