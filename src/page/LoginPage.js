import React, {useState} from 'react';
import '../asset/css/Login.css';
import Button from "reactstrap/es/Button";
import Cookies from 'universal-cookie';
import {Application, Path} from "../utils/Constant";
import {ServiceApi} from "../service/ServiceApi";
import Axios from "axios"
import Code from "../asset/history.png";
import * as Validator from "../service/Validator";

export default function LoginPage() {
    const cookies = new Cookies();
    const [username, typingUsername] = useState("");
    const [password, typingPassword] = useState("");
    verifyLogin();

    function  verifyLogin() {
        if (cookies.get(Application.USER)){
            window.location.href = "/";
        } else {
            cookies.remove(Application.USER);
        }
    }

    function AttemptToLogin(){
        if (!Validator.isValidUsername(username)){
            displayError("Required", "Username is required!");
        } else if (!password){
            displayError("Required", "Password is required!");
        } else if (username && password){
            Axios.get(ServiceApi.news)
                .then(function (response) {
                    console.log(response);
                    cookies.set(Application.USER, {"username" : username}, { path: '/', expires: new Date(Date.now()+2592000)});
                    verifyLogin();
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
        console.log(title + " <> "+ message);
    }

    function handleKeyDown(key) {
        if (key === 'Enter') {
            AttemptToLogin()
        }
    }

    return (
        <>
            <div> </div>
            <div className="App login-container bg-url">
                <a href={Path.index} className="login-back-home">home</a>
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

                    <a href={Path.register} className="login-href">Sign up</a> | <a href={Path.forget} className="login-href">Forget?</a>
                </form>

            </div>
        </>
    );
}