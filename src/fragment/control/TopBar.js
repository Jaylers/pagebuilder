import React, {useState} from 'react';
import "./../../asset/css/TopBar.css"
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
import Tradition from "../../asset/Tradition.ico";
import Button from "reactstrap/es/Button";

export default function TopBar() {
    const cookies = new Cookies();
    let user = cookies.get(Application.USER);
    let UserState = (!user)? login : logout;
    user = (!user)? { "username" : ""} : user;
    const [isOpen, setToggle] = useState(false);

    return (
        <div className="topBar">
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/"> <img src={Tradition} alt={"app logo"} className="ImgItemLogo"/> TC PageBuilder</NavbarBrand>
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
                                <DropdownItem divider />
                                <DropdownItem>
                                    List
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                        <NavItem className="btn-header btn-script marginRight50">
                            <NavLink>Script</NavLink>
                        </NavItem>

                        <NavItem className="txt-header-group">
                            <NavLink className="txt-header">{user.username}</NavLink>
                        </NavItem>

                        <NavItem className="headerBarUser">
                            <Button className="btn-logout padding4"
                                    onClick={() => {
                                        cookies.remove(Application.USER);
                                        window.location.href = Action.login;
                                    }}>
                                <img src={UserState} className="svg-inline--fa ImgItemIcon" alt={"app logo"}/>
                            </Button>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

    );
}