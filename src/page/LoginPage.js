import React, {useState} from 'react';
import '../asset/css/Login.css';
import Button from "reactstrap/es/Button";
import Cookies from 'universal-cookie';
import {Application} from "../utils/Constant";
import {ServiceApi} from "../service/ServiceApi";
import Axios from "axios"
import Code from "../asset/history.png";

export default function LoginPage() {
    const cookies = new Cookies();
    cookies.remove(Application.APP_NAME);

    const [username, typingUsername] = useState("");
    const [password, typingPassword] = useState("");

    function  verifyLogin() {
        if (cookies.get(Application.APP_NAME)){
            window.location.href = "/";
        } else {
            console.log("Cookies name false : " + cookies.get(Application.APP_NAME));
            cookies.remove(Application.APP_NAME);
        }
    }

    function AttemptToLogin(){
        if (!username){
            displayError("Required", "Username is required!");
        } else if (!password){
            displayError("Required", "Password is required!");
        } else if (username && password){
            Axios.get(ServiceApi.news)
                .then(function (response) {
                    console.log(response);
                    cookies.set(Application.APP_NAME, username, { path: '/' });
                    verifyLogin();
                })
                .catch(function (error) {
                    cookies.remove(Application.APP_NAME);
                    displayError("Exception", error);
                });
        } else {
            displayError("Required", "Username and Password are required!");
        }
    }

    function displayError(title, message) {
        console.log(title + " <> "+ message);
    }

    function handleKeyDown(key) {
        if (key === 'Enter') {
            AttemptToLogin()
        }
    }

    return (
        <div className="App login-container bg-url">
            <form className="login-form">
                <img src={Code} className="login-brand"/> <br/>
                <input id="username" type="text" autoComplete="username" className="login-input" placeholder="Username"
                                  onChange={ event => typingUsername(event.target.value)} /> <br/> <br/>
                <input id="password" type="password" autoComplete="current-password" className="login-input" placeholder="Password"
                                  onChange={ event => typingPassword(event.target.value)}
                                  onKeyPress={ event => handleKeyDown(event.key) }/> <br/>
                <Button onClick={ () => new AttemptToLogin() } className="login-btn">
                    Sign in
                </Button>
                <br/>

                <a href="/create" className="login-href">Sign up</a> | <a href="/forgot" className="login-href">Forget?</a>
            </form>

        </div>
    );
}