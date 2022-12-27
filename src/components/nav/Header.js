import React, {useState} from "react";
import {Menu} from "antd";

const{SubMenu} = Menu;

const Header = () => {
    const [current, setCurrent]= useState('');
    const handleClick = () =>{
        //
    }
    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
            <Menu.Item key="mail">
            Home
            </Menu.Item>
            <SubMenu title="Navigation Three - Submenu">
                <Menu.ItemGroup title="Item 1">
                    <Menu.Item key="setting:1">Option1</Menu.Item>
                    <Menu.Item key="setting:2">Option2</Menu.Item>
                </Menu.ItemGroup>
            </SubMenu>
        </Menu>
    );
}

export default Header