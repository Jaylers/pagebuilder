import React, {useState} from 'react';
import CopyRight from "./CopyRight";
import next from "../../asset/svg/double-chevron.svg"
import '../../asset/css/App.css';
import '../../asset/css/SideBar.css';
import '../../asset/css/Utils.css';
import Input from "reactstrap/es/Input";
import {Dropdown, DropdownItem, DropdownMenu, DropdownToggle} from "reactstrap";
import Button from "reactstrap/es/Button";

export default function SideBar(setHide:(set:boolean) => void) {

    const [isNameSpaceOpen, setNamSpaceOpen] = useState(false);
    const [isSiteOpen, setSiteOpen] = useState(false);
    function setIsDisplay(status) {
        setHide(status)
    }

    return (
        <div className="padgin0">
            <div className="row btn-page bgGray padgin0">
                <div className="col-4 padgin0">
                    <Button onClick={() => setIsDisplay(false)}>
                        <img src={next}  alt={"close or open bar"} className="ImgItemMid margin10 padding8"/>
                    </Button>
                </div>
                <div className={"col txt-left txt20 "}>
                    Page settings
                </div>
            </div>

            <div className="text-left padding10">
                File name :
                <Input type="email" name="email" id="filename" placeholder="File name" className="input-windows"/>
            </div>
            <div className="text-left padding10">
                Name space :
                <Dropdown isOpen={isNameSpaceOpen} toggle={() => setNamSpaceOpen(!isNameSpaceOpen)} >
                    <DropdownToggle caret className="input-windows">
                        Select
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="text-left padding10">
                Site :
                <Dropdown isOpen={isSiteOpen} toggle={() => setSiteOpen(!isSiteOpen)} >
                    <DropdownToggle caret className="input-windows">
                        Select
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem>Foo Action</DropdownItem>
                        <DropdownItem>Bar Action</DropdownItem>
                        <DropdownItem>Quo Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
            <div className="text-left padding10">
                Version :
                <Input type="email" name="email" id="version_name" placeholder="Version" className="input-windows"/>
            </div>

            <Button className="btn-windows margin10">
                Test
            </Button>
            <Button className="btn-windows margin10">
                Page Detail
            </Button>
            <Button className="btn-windows margin10">
                Save
            </Button>

            <div className="copyRight">
                {CopyRight()}
            </div>
        </div>
    );
}