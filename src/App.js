import React from 'react';
import './css/App.css';
import Header from "./component/Header";
import Welcome from "./component/Welcome";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="App">
        <div className="topBar">
            <Header/>
        </div>

        <div className="mainBar">
            <div className="menuBar">
                <Sidebar/>
                <div className="copyRight">
                    Copyright &copy; 2019 Jaylers 2019 All right Reserved.
                </div>
            </div>
            <div className="content">
                <Welcome/>
            </div>
        </div>

    </div>
  );
}

export default App;
