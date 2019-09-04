import React, {useState} from 'react';
import '../asset/css/App.css';
import '../asset/css/SideBar.css'
import '../asset/css/Utils.css'
import notSupport from "../asset/svg/warning.svg";
import {Application, Action} from "../utils/Constant";
import WelcomeFragment from "../fragment/WelcomeFragment";
import HomeFragment from "../fragment/HomeFragment";
import TimeLineFragment from "../fragment/TimeLineFragment";
import ExperienceFragment from "../fragment/ExperienceFragment";
import HobbyFragment from "../fragment/HobbyFragment";
import AboutFragment from "../fragment/AboutFragment";
import Cookies from "universal-cookie";
import TopBar from "../fragment/control/TopBar";
import SideBar from "../fragment/control/SideBar";

function App() {
    const cookies = new Cookies();
    const [page, setPage] = useState(HomeFragment());
    function resetPage(selectedPath) {
        if (selectedPath.includes(Action.home)){
            setPage(HomeFragment);
        } else if (selectedPath.includes(Action.timeline)){
            setPage(TimeLineFragment);
        } else if (selectedPath.includes(Action.experience)){
            setPage(ExperienceFragment);
        } else if (selectedPath.includes(Action.hobby)){
            setPage(HobbyFragment);
        }else if (selectedPath.includes(Action.about)){
            setPage(AboutFragment);
        }else if (selectedPath.includes(Action.login)){
            cookies.remove(Application.USER);
            window.location.href = Action.login;
        }else {
            setPage(WelcomeFragment);
        }
    }

    return (
        <>
            <div className="mobile">
                <img className="ImgItemMid" src={notSupport} alt={"icon"}/> <br/>
                Device not compatible
            </div>

            <div className="App">
                <div className="row">
                    <div className="col-12 topBar">
                        {TopBar(resetPage)}
                    </div>

                    <div className="col-12 mainBar">
                        <div className="row">
                            <div className="col">
                                <div className="content">
                                    {page}
                                </div>
                            </div>

                            <div className="col-2">
                                {SideBar(resetPage)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
