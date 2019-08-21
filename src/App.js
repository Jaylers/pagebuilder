import React from 'react';
import './css/App.css';
import Header from "./component/Header";
import Welcome from "./component/Welcome";
import Sidebar from "./component/Sidebar";

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="menu">
            <Sidebar/>
        </div>
        <div className="content">
            <Welcome/>
        </div>
    </div>
  );
}

export default App;
