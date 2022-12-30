import React, { useState } from "react";
import { Menu } from "antd";
import {
    HomeOutlined, 
    UserOutlined, 
    UserAddOutlined,
    ProfileFilled 
} from "@ant-design/icons";
import {Link} from "react-router-dom";

const{SubMenu, Item} = Menu;

const Header = () => {

    const [current, setCurrent]= useState('');

    const handleClick = (e) => {
        console.log(e.key);
        setCurrent(e.key);
    }

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" >

            <Item key="home" icon={<HomeOutlined />}>
                <Link to="/"> Home </Link> 
            </Item>

            <SubMenu title="Profile" key="profile" icon={<ProfileFilled />}> {/* title in the video = "username"*/}
                <Menu.ItemGroup title="Item 1">
                    <Item key="setting:1">Option1</Item>
                    <Item key="setting:2">Option2</Item>
                </Menu.ItemGroup>
            </SubMenu> 

            <Item key="register" icon={<UserAddOutlined />} className="float-right"> {/*float-right classname not working*/}
                <Link to="/register"> Register </Link> 
            </Item>

            <Item key="login" icon={<UserOutlined />} className="float-right"> {/*float-right classname not working*/}
                <Link to="/login"> Login </Link>
            </Item>

        </Menu>
    );
}

export default Header