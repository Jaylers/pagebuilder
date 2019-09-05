import React, {useState} from 'react';
import '../asset/css/App.css';
import '../asset/css/SideBar.css'
import '../asset/css/Utils.css'
import notSupport from "../asset/svg/warning.svg";
import TopBar from "../fragment/control/TopBar";
import SideBar from "../fragment/control/SideBar";
import Button from "reactstrap/es/Button";
import Hamburger from "../asset/svg/menu.svg"
import WelcomeFragment from "../fragment/WelcomeFragment";

function App() {

    const [isShow, setShow] = useState("col-2 menuBar");
    const [isHam, setHam] = useState("displayNone");
    function setDisplay(set){
        if (set){
            setShow("col-2 menuBar");
            setHam("displayNone");
        } else {
            setShow("displayNone");
            setHam("displayNow");
        }
    }

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
                            <div className="col padgin0">
                                <div className="content">
                                    {WelcomeFragment()}
                                </div>
                            </div>

                            <div className={isShow}>
                                {SideBar(setDisplay, (isShow === "col-2 menuBar"))}
                            </div>
                            <div className={isHam}>
                                <Button className="btnSideBarControl"
                                onClick={() => setDisplay(true)}>
                                    <img src={Hamburger} className="ImgItemLogo" alt={"hamburger icon"}/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
