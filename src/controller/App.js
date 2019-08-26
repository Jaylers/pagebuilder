import React, { useState} from 'react';
import './../css/App.css';
import './../css/SideBar.css'
import Welcome from "./../component/Welcome";
import CopyRight from "./../component/control/CopyRight";
import logo from "./../asset/logo.svg";
import Code from "./../asset/code.png";
import timeline from "./../asset/timeline.png";
import coding from "./../asset/coding.png";
import hobby from "./../asset/hobby.png";
import geek from "./../asset/geek.png";
import Home from "./../component/Home";
import TimeLine from "./../component/TimeLine";
import Experience from "./../component/Experience";
import AboutMe from "./../component/AboutMe";
import Hobby from "./../component/Hobby";

import {Nav as NavLeft, NavItem as NavItemLeft} from "@trendmicro/react-sidenav";
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

function App() {

    const uuu =  window.location.href;
    function url() {
        console.log(uuu);
        if (uuu.includes("home")){
            return <Home/>
        } else if (uuu.includes("timeline")){
            return <TimeLine/>
        } else if (uuu.includes("experience")){
            return <Experience/>
        } else if (uuu.includes("hobby")){
            return <Hobby/>
        }else if (uuu.includes("about")){
            return <AboutMe/>
        }else if (uuu.includes("login")){
            return <Welcome/>
        }else {
            return <Welcome/>
        }
    }

    const [page, setPage] = useState(url());
    const [isOpen, setToggle] = useState(false);


    return (
        <div className="App">
            <div className="topBar">
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">JAYLERS INFINITE</NavbarBrand>
                    <NavbarToggler onClick={() => setToggle(!isOpen)} />
                    <Collapse isOpen={isOpen} navbar>

                        <Nav className="ml-auto" navbar>
                            <br/>

                            <NavLink className="headerBarItemText" onClick={ () => setPage(<Home/>)} >
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Home
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => setPage(<TimeLine/>)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Timeline
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => setPage(<Experience/>)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Experience
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => setPage(<Hobby/>)} >
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Hobby
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => setPage(<AboutMe/>)} >
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        About me
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <NavLink onClick={ () => setPage(<Welcome/>)}>
                                <Navbar className="headerBarItem">
                                    <NavItem>
                                        Login
                                    </NavItem>
                                </Navbar>
                            </NavLink>

                            <Navbar>
                                <NavItem className="copyRightTop">
                                    <CopyRight/>
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
                            <NavLink onClick={ () => setPage(<Welcome/>)}>
                                <NavItemLeft eventKey="Home">
                                    <div className='navMenuIcon'>
                                        <span> JAYLERS INFINITE </span>
                                    </div>
                                </NavItemLeft>
                            </NavLink>

                        </Navbar>

                        <NavLink onClick={ () => setPage(<Home/>)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Home">
                                    <img className="navImgItem" src={Code} alt={"Home"}/> Home
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => setPage(<TimeLine/>)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Timeline">
                                    <img className="navImgItem" src={timeline} alt={"Timeline"}/> Timeline
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => setPage(<Experience/>)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Experience">
                                    <img className="navImgItem" src={coding} alt={"Experience"}/> Experience
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => setPage(<Hobby/>)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="Hobby">
                                    <img className="navImgItem" src={hobby} alt={"Hobby"} /> Hobby
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>

                        <NavLink onClick={ () => setPage(<AboutMe/>)}>
                            <Navbar className="menuItem">
                                <NavItemLeft eventKey="About me">
                                    <img className="navImgItem" src={geek} alt={"About me"}/> About me
                                </NavItemLeft>
                            </Navbar>
                        </NavLink>
                    </NavLeft>
                    <div className="copyRight">
                        <CopyRight/>
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
