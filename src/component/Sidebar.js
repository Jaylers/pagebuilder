import React from 'react';
import { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Navbar from "reactstrap/es/Navbar";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import NavLink from "reactstrap/es/NavLink";
import './../css/SideBar.css';
import logo from "../asset/logo.svg";
import Code from "../asset/code.png"
import coding from "../asset/coding.png"
import geek from "../asset/geek.png"
import hobby from "../asset/hobby.png"
import timeline from "../asset/timeline.png"

export default class Sidebar extends React.Component {

    render() {
        return (
            <Nav>
                <NavbarBrand>
                    <img src={logo} className="App-brand" alt="logo" />
                </NavbarBrand>
                <br/>
                <Navbar className="menuItem">
                    <NavLink href={"/"}>
                        <NavItem eventKey="Home">
                            <div className='navMenuIcon'>
                                <span> JAYLERS INFINITE </span>
                            </div>
                        </NavItem>
                    </NavLink>

                </Navbar>

                <NavLink href={"/home"}>
                    <Navbar className="menuItem">
                        <NavItem eventKey="Home">
                            <img className="navImgItem" src={Code}/> Home
                        </NavItem>
                    </Navbar>
                </NavLink>

                <NavLink href={"/timeline"}>
                    <Navbar className="menuItem">
                        <NavItem eventKey="Timeline">
                            <img className="navImgItem" src={timeline}/> Timeline
                        </NavItem>
                    </Navbar>
                </NavLink>

                <NavLink href={"/experience"}>
                    <Navbar className="menuItem">
                        <NavItem eventKey="Experience">
                            <img className="navImgItem" src={coding}/> Experience
                        </NavItem>
                    </Navbar>
                </NavLink>

                <NavLink href={"/hobby"}>
                    <Navbar className="menuItem">
                        <NavItem eventKey="Hobby">
                            <img className="navImgItem" src={hobby} alt={"Hobby"}/> Hobby
                        </NavItem>
                    </Navbar>
                </NavLink>

                <NavLink href={"/about"}>
                    <Navbar className="menuItem">
                        <NavItem eventKey="About me">
                            <img className="navImgItem" src={geek}/> About me
                        </NavItem>
                    </Navbar>
                </NavLink>
            </Nav>
        );
    }
}