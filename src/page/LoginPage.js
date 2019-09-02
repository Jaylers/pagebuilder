import React, {useState} from 'react';
import '../asset/css/Login.css';
import Button from "reactstrap/es/Button";
import Cookies from 'universal-cookie';
import {Application, Path} from "../utils/Constant";
import {ServiceApi} from "../service/ServiceApi";
import Axios from "axios"
import Code from "../asset/logo.svg";
import * as Validator from "../service/Validator";

export default function LoginPage() {
    const cookies = new Cookies();
    const lastUser = cookies.get(Application.LAST_USER);
    const [username, typingUsername] = useState(lastUser ? lastUser.username : "admin");
    const [password, typingPassword] = useState("123456");
    verifyLogin();

    function verifyLogin() {
        if (cookies.get(Application.USER)) {
            window.location.href = "/";
        } else {
            cookies.remove(Application.USER);
        }
    }

    function AttemptToLogin() {
        if (!Validator.isValidUsername(username)) {
            displayError("Required", "Username is required!");
        } else if (!password) {
            displayError("Required", "Password is required!");
        } else if (username && password) {
            const request = {
                username: username,
                password: password
            };

            let config = {
                headers : { "Content-Type" : "application/json" }
            };

            Axios.post(ServiceApi.POST_LOGIN, request, config)
                .then(function (response) {
                    let data = response.data;
                    if (data.status === "success"){
                        const user = data.data;
                        cookies.set(Application.USER, user, { path: '/', expires: new Date(Date.now()+2592000)});
                        cookies.set(Application.LAST_USER, {"username" : username}, { path: '/'});
                        verifyLogin();
                    }
                })
                .catch(function (error) {
                    cookies.remove(Application.USER);
                    displayError("Exception", error);
                });
        } else {
            displayError("Required", "Username and Password are required!");
        }
    }

    function displayError(title, message) {
        console.log(title + " <> " + message);
    }

    function handleKeyDown(key) {
        if (key === 'Enter') {
            AttemptToLogin()
        }
    }

    return (
        <div className="App login-container bg-url">
            <a href={Path.index} className="login-back-home">home</a>
            <form className="login-form">
                <img src={Code} className="login-brand" alt={"logo"}/> <br/>
                <input id="username" type="text" autoComplete="username" className="login-input"
                       placeholder="Username" value={username}
                       onChange={event => typingUsername(event.target.value)}/> <br/> <br/>
                <input id="password" type="password" autoComplete="current-password" className="login-input"
                       placeholder="Password" value={password}
                       onChange={event => typingPassword(event.target.value)}
                       onKeyPress={event => handleKeyDown(event.key)}/> <br/>

                <Button onClick={() => new AttemptToLogin()} className="login-btn">
                    Sign in
                </Button>
                <br/>

                <a href={Path.register} className="login-href">Sign up</a> | <a href={Path.forget}
                                                                                className="login-href">Forget?</a>
            </form>

        </div>
    );
}