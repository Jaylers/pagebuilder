import React, {useState} from 'react';
import '../asset/css/Login.css';
import Button from "reactstrap/es/Button";
import Cookies from 'universal-cookie';
import {Application, Action} from "../utils/Constant";
import Code from "../asset/history.png";

export default function RegisterPage() {
    const cookies = new Cookies();
    const [firstName, typingFirstName] = useState("");
    const [lastName, typingLastName] = useState("");
    const [email, typingEmail] = useState("");
    const [username, typingUsername] = useState("");
    const [password, typingPassword] = useState("");
    const [rePassword, typingRePassword] = useState("");
    verifyLogin();

    function  verifyLogin() {
        console.log("Data : " + firstName + " <> " + lastName + " <> " + email + " <> " + username + " <> " + password + " <> " + rePassword);
        if (cookies.get(Application.USER)){
            window.location.href = "/";
        } else {
            cookies.remove(Application.USER);
        }
    }

    function AttemptToRegister(){
        displayError("No implemented", "please, Implement this register")
    }

    function displayError(title, message) {
        console.log(title + " <> "+ message);
    }

    function handleKeyDown(key) {
        if (key === 'Enter') {
            AttemptToRegister()
        }
    }

    return (
        <div className="App login-container bg-url whitText">
            <form className="login-form">
                <img src={Code} className="login-brand" alt={"logo"}/> <br/>
                <p className="text-forget"> Create Account</p> <br/>
                <div>
                    <input id={"firstName"} type="text" autoComplete="text" className="login-input" placeholder="First name"
                           onChange={ event => typingFirstName(event.target.value)} />

                    <input id={"lastName"} type="text" autoComplete="text" className="login-input" placeholder="Last name"
                           onChange={ event => typingLastName(event.target.value)} />
                </div>

                <div><input id={"email"} type="text" autoComplete="email" className="login-input" placeholder="example@email.com"
                            onChange={ event => typingEmail(event.target.value)} />

                    <input id={"username"} type="text" autoComplete="text" className="login-input" placeholder="Username"
                           onChange={ event => typingUsername(event.target.value)} />
                </div>

                <div>
                    <input id={"password"} type="password" autoComplete="current-password" className="login-input" placeholder="Password"
                           onChange={ event => typingPassword(event.target.value)}/>

                    <input id={"rePassword"} type="password" autoComplete="current-password" className="login-input" placeholder="Confirm Password"
                           onChange={ event => typingRePassword(event.target.value)}
                           onKeyPress={ event => handleKeyDown(event.key) }/>
                </div>
                <br/> <br/>

                <Button onClick={ () => new AttemptToRegister() } className="login-btn">
                    Sign up
                </Button>
                <br/>

               Already have an account? | <a href={Action.login} className="login-href boldText">Sign in</a>
            </form>

        </div>
    );
}