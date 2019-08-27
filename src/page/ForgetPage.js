import React, {useState} from 'react';
import '../asset/css/Login.css';
import Button from "reactstrap/es/Button";
import Cookies from 'universal-cookie';
import {Application, Path} from "../utils/Constant";
import Logo from "../asset/logo.svg";

export default function LoginPage() {
    const cookies = new Cookies();
    const [email, typingEmail] = useState("");
    verifyLogin();

    function  verifyLogin() {
        if (cookies.get(Application.USER)){
            window.location.href = "/";
        } else {
            cookies.remove(Application.USER);
        }
    }

    function tryToSendEmailReset() {

    }

    function handleKeyDown(key) {
        if (key === 'Enter') {
            tryToSendEmailReset()
        }
    }

    return (
        <>
            <div> </div>
            <div className="App login-container bg-url whitText">
                <form className="login-form">
                    <img src={Logo} className="login-brand" alt={"logo"}/> <br/>
                    <div className="div-forget">
                        <div className="text-forget">Find your account</div>
                        <div className="text-notfound-detail">Enter your Username or Email</div>
                        <div className="text-notfound-detail">We will send the reset link to your email</div>
                    </div>
                    <br/><br/>
                    <input id="email" type="email" autoComplete="email" className="login-input" placeholder="example@email.com"
                           onChange={ event => typingEmail(event.target.value)}
                           onKeyPress={(event) => handleKeyDown(event.key)} /> <br/> <br/>

                    <Button onClick={ () => tryToSendEmailReset() } className="login-btn">
                        Request
                    </Button>
                    <br/>

                    <a href={Path.register} className="login-href">Sign up</a> | <a href={Path.login} className="login-href">Sign in</a>
                </form>

            </div>
        </>
    );
}