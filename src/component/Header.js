import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import Sidebar from "./Sidebar";

export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">JAYLERS</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <br/>

                        <NavLink className="headerBarItemText" href={"/home"}>
                            <Navbar className="headerBarItem">
                                <NavItem>
                                    Home
                                </NavItem>
                            </Navbar>
                        </NavLink>

                        <NavLink href={"/timeline"}>
                            <Navbar className="headerBarItem">
                                <NavItem>
                                    Timeline
                                </NavItem>
                            </Navbar>
                        </NavLink>

                        <NavLink href={"/experience"}>
                            <Navbar className="headerBarItem">
                                <NavItem>
                                    Experience
                                </NavItem>
                            </Navbar>
                        </NavLink>

                        <NavLink href={"/hobby"}>
                            <Navbar className="headerBarItem">
                                <NavItem>
                                    Hobby
                                </NavItem>
                            </Navbar>
                        </NavLink>

                        <NavLink href={"/about"}>
                            <Navbar className="headerBarItem">
                                <NavItem>
                                    About me
                                </NavItem>
                            </Navbar>
                        </NavLink>

                        <NavLink href={"/login"}>
                            <Navbar className="headerBarItem">
                                <NavItem>
                                    Login
                                </NavItem>
                            </Navbar>
                        </NavLink>

                        {/*<Navbar>*/}
                        {/*    <UncontrolledDropdown nav inNavbar>*/}
                        {/*        <DropdownToggle nav caret>*/}
                        {/*            Admin*/}
                        {/*        </DropdownToggle>*/}
                        {/*        <DropdownMenu right>*/}
                        {/*            <DropdownItem>*/}
                        {/*                <NavLink href="/login">Login</NavLink>*/}
                        {/*            </DropdownItem>*/}
                        {/*            <DropdownItem divider />*/}
                        {/*            <DropdownItem>*/}
                        {/*                <NavLink href="/help">Help!</NavLink>*/}
                        {/*            </DropdownItem>*/}
                        {/*        </DropdownMenu>*/}
                        {/*    </UncontrolledDropdown>*/}
                        {/*</Navbar>*/}
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}