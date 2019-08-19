import React from 'react';
import logo from './asset/logo.svg';
import './css/App.css';
import { Button } from 'reactstrap';
import {} from './component/Header';
import Header from "./component/Header";

function App() {
  return (
    <div className="App">

      <Header/>

        <div className="App">
            <div className="m-lg-1 m-sm-1 m-md-1">
                HHHHH
            </div>

            <div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>

                    <Button color="primary">primary</Button>{' '}

                </header>
            </div>
        </div>

    </div>
  );
}

export default App;
