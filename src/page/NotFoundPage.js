import React, {useState} from 'react';
import '../asset/css/Login.css';
import Logo from "../asset/404.png";
import Button from "reactstrap/es/Button";

export default function NotFoundPage() {

    const url = window.location.pathname;

    return (
        <div className="App">
            <div className="login-form">
                <img src={Logo} className="img-brand"/> <br/>
                <p className="text-notfound">It's look like the request url is not exist</p>
                <p className="text-notfound-detail">{url}</p>
                <Button href="/" className="btn-primary notfound-href">
                    Home
                </Button>
            </div>

        </div>
    );
}