import React, {useState} from 'react';
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem, NavLink, UncontrolledDropdown
} from "reactstrap";
import Cookies from "universal-cookie";
import {Application, Action} from "../../utils/Constant";
import login from "../../asset/svg/login.svg";
import logout from "../../asset/svg/logout.svg";
import Button from "reactstrap/es/Button";

export default function TopBar(resetPage: (path: String) => void ) {
    const cookies = new Cookies();
    let user = cookies.get(Application.USER);
    let UserState = (!user)? login : logout;
    user = (!user)? { "username" : ""} : user;
    const [isOpen, setToggle] = useState(false);

    return (
        <div className="topBarRelative">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/">TC PageBuilder</NavbarBrand>
                <NavbarToggler onClick={() => setToggle(!isOpen)} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <UncontrolledDropdown nav inNavbar className="btn-header btn-page">
                            <DropdownToggle nav caret>
                                Page
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    New
                                </DropdownItem>
                                <DropdownItem>
                                    List
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem className="btn-header btn-script marginRight50">
                            <NavLink onClick={() => resetPage(Action.script)}>Script</NavLink>
                        </NavItem>

                        <NavItem className="txt-header-group">
                            <NavLink className="txt-header"
                                onClick={() => resetPage(Action.script)}>{user.username}</NavLink>
                        </NavItem>

                        <NavItem className="headerBarUser">
                            <Button className="btn-logout padding4">
                                <img src={UserState} className="svg-inline--fa ImgItemIcon" alt={"app logo"}/>
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    );
}