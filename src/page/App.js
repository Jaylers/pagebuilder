import React, {useState} from 'react';
import '../asset/css/App.css';
import '../asset/css/SideBar.css'
import '../asset/css/Utils.css'
import notSupport from "../asset/svg/warning.svg";
import HomeFragment from "../fragment/HomeFragment";
import TopBar from "../fragment/control/TopBar";
import SideBar from "../fragment/control/SideBar";

function App() {
    return (
        <>
            <div className="mobile">
                <img className="ImgItemMid" src={notSupport} alt={"icon"}/> <br/>
                Device not compatible
            </div>

            <div className="App">

                {TopBar()}

                <div className="row">
                    <div className="col-12 mainBar">
                        <div className="row">
                            <div className="col">
                                <div className="content">
                                    {HomeFragment()}
                                </div>
                            </div>

                            <div className="col-2 menuBar">
                                {SideBar()}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
