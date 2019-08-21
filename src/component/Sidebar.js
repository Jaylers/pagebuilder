import React from 'react';
import { Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Navbar from "reactstrap/es/Navbar";
import NavbarBrand from "reactstrap/es/NavbarBrand";
import logo from "../asset/logo.svg";

export default class Sidebar extends React.Component {

    render() {

        return (
            <Nav>
                <NavbarBrand>
                    <img src={logo} className="App-brand" alt="logo" />
                </NavbarBrand>
                <br/>
                <Navbar className="menuItem mHome">
                    <NavItem eventKey="Home">
                        Home
                    </NavItem>
                </Navbar>

                <Navbar className="menuItem mTimeline">
                    <NavItem eventKey="Timeline">
                        Timeline
                    </NavItem>
                </Navbar>

                <Navbar className="menuItem mExp">
                    <NavItem eventKey="Experience">
                        Experience
                    </NavItem>
                </Navbar>

                <Navbar className="menuItem mFavorite">
                    <NavItem eventKey="Favorite">
                        Favorite
                    </NavItem>
                </Navbar>

                <Navbar className="menuItem mAboutMe">
                    <NavItem eventKey="More">
                        About me
                    </NavItem>
                </Navbar>
            </Nav>
        );
    }
}