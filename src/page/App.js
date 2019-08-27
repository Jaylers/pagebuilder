import React, { useState} from 'react';
import '../asset/css/App.css';
import '../asset/css/SideBar.css'
import logo from "../asset/logo.svg";
import Code from "../asset/code.png";
import timeline from "../asset/timeline.png";
import coding from "../asset/coding.png";
import hobby from "../asset/hobby.png";
import geek from "../asset/geek.png";
import logout from "../asset/logout.png";

import {Nav as NavLeft, NavItem as NavItemLeft} from "@trendmicro/react-sidenav";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
import {Application, Path} from "../utils/Constant";
import WelcomeFragment from "../fragment/WelcomeFragment";
import HomeFragment from "../fragment/HomeFragment";
import TimeLineFragment from "../fragment/TimeLineFragment";
import ExperienceFragment from "../fragment/ExperienceFragment";
import HobbyFragment from "../fragment/HobbyFragment";
import AboutFragment from "../fragment/AboutFragment";
import CopyRight from "../fragment/control/CopyRight";
import Cookies from "universal-cookie";

function App() {
    const cookies = new Cookies();
    const [page, setPage] = useState(WelcomeFragment());
    const [current, setCurrent] = useState(Path.welcome);
    const [isOpen, setToggle] = useState(false);
    let user = cookies.get(Application.USER);
    if (!user){
        user = { "username" : "Sign in"}
    }

    function resetPage(selectedPath) {
        setCurrent(selectedPath);
        if (selectedPath.includes(Path.home)){
            setPage(HomeFragment);
        } else if (selectedPath.includes(Path.timeline)){
            setPage(TimeLineFragment);
        } else if (selectedPath.includes(Path.experience)){
            setPage(ExperienceFragment);
        } else if (selectedPath.includes(Path.hobby)){
            setPage(HobbyFragment);
        }else if (selectedPath.includes(Path.about)){
            setPage(AboutFragment);
        }else if (selectedPath.includes(Path.login)){
            cookies.remove(Application.USER);
            window.location.href = Path.login;
        }else {
            setPage(WelcomeFragment);
        }
    }

    function isActive(self) { return current === self }

    return (
        <div className="App">
            <div className="topBar">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">JAYLERS INFINITE</NavbarBrand>
                    <NavbarToggler onClick={() => setToggle(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar>

                        <Nav className="ml-auto" navbar>
                            <br/>
                            <NavLink className="headerBarItemActive"
                                     onClick={ () => resetPage(Path.home)}
                                     active={isActive(Path.home)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Home
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => resetPage(Path.timeline)}
                                     active={isActive(Path.timeline)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Timeline
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => resetPage(Path.experience)}
                                     active={isActive(Path.experience)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Experience
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => resetPage(Path.hobby)}
                                     active={isActive(Path.hobby)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Hobby
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => resetPage(Path.about)}
                                     active={isActive(Path.about)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        About me
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => resetPage(Path.login)}>
                                <Navbar className="headerBarItem">
                                    <NavItem className="headerBarUser">
                                        {user.username}
                                        <img src={logout} className="headBarImgItem" alt={"app logo"}/>
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <Navbar className="copyRightTop">
                                <NavItem className="copyRightTop">
                                    {CopyRight()}
                                </NavItem>
                            </Navbar>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>

            <div className="mainBar">
                <div className="menuBar">
                    <NavLeft>
                        <NavbarBrand>
                            <img src={logo} className="App-brand" alt="logo" />
                        </NavbarBrand>
                        <br/>
                        <Navbar className="menuItem">
                            <NavLink onClick={ () => resetPage(Path.welcome)}
                                     active={isActive(Path.welcome)}>
                                <NavItemLeft eventKey="Home">
                                    <div className='navMenuIcon'>
                                        <span> JAYLERS INFINITE </span>
                                    </div>
                                </NavItemLeft>
                            </NavLink>
                        </Navbar>

                        <NavLink onClick={ () => resetPage(Path.home)}
                                 active={isActive(Path.home)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Home">
                                    <img className="navImgItem" src={Code} alt={"HomeFragment"}/> Home
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => resetPage(Path.timeline)}
                                 active={isActive(Path.timeline)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Timeline">
                                    <img className="navImgItem" src={timeline} alt={"Timeline"}/> Timeline
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => resetPage(Path.experience)}
                                 active={isActive(Path.experience)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Experience">
                                    <img className="navImgItem" src={coding} alt={"Experience"}/> Experience
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => resetPage(Path.hobby)}
                                 active={isActive(Path.hobby)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Hobby">
                                    <img className="navImgItem" src={hobby} alt={"HobbyFragment"} /> Hobby
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => resetPage(Path.about)}
                                 active={isActive(Path.about)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="About me">
                                    <img className="navImgItem" src={geek} alt={"About me"}/> About me
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>
                    </NavLeft>
                    <div className="copyRight">
                        {CopyRight()}
                    </div>
                </div>
                <div className="content">
                    {page}
                </div>
            </div>

        </div>
    );
}

export default App;
