import React from 'react';
import './css/App.css';
import Header from "./component/Header";
import Welcome from "./component/Welcome";

function App() {
  return (
    <div className="App">
        <Header/>
        <Welcome/>
    </div>
  );
}

export default App;
