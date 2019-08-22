import React from 'react';
import './css/App.css';
import Header from "./component/Header";
import Welcome from "./component/Welcome";
import Sidebar from "./component/Sidebar";
import CopyRight from "./component/control/CopyRight";

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
                    <CopyRight/>
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
