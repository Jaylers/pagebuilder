import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/index.css';
import * as serviceWorker from './service/serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter} from "react-router-dom";
import Routes from "./service/Routes";

const AppWithRouter = () => (
    <BrowserRouter>
        <Routes/>
    </BrowserRouter>
);

ReactDOM.render( <AppWithRouter/>, document.getElementById('root'));

serviceWorker.unregister();
