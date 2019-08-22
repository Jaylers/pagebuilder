import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

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
                        <Navbar>
                            <NavItem>
                                <NavLink href={"/home"}>Home</NavLink>
                            </NavItem>
                        </Navbar>
                        <Navbar>
                            <NavItem>
                                <NavLink href={"/timeline"}>Timeline</NavLink>
                            </NavItem>
                        </Navbar>
                        <Navbar>
                            <NavItem>
                                <NavLink href={"/experience"}>Experience</NavLink>
                            </NavItem>
                        </Navbar>
                        <Navbar>
                            <NavItem>
                                <NavLink href={"/hobby"}>Hobby</NavLink>
                            </NavItem>
                        </Navbar>
                        <Navbar>
                            <NavItem>
                                <NavLink href={"/about"}>About me</NavLink>
                            </NavItem>
                        </Navbar>
                        <Navbar>
                            <NavItem>
                                <NavLink href={"/login"}>Login</NavLink>
                            </NavItem>
                        </Navbar>
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