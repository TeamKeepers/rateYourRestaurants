import React, { Component } from "react";
import styled from 'styled-components';
import { Link  } from "react-router-dom";

import logo from "../assets/logo.svg";

const NavigationBar = styled.div`
    height: 71px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: solid 1px #d8d8d8;
    position: fixed;
    top: 0;
    background-color: white;
    z-index: 500;
`;

const Links = styled(Link)`
    text-decoration: none;
    color: black;
`;

const LunaLogo = styled.img`
    margin-left: 20px;
    width: 101px;
    height: 24px;
`;

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    margin-right: 30px;
`;
const MenuItem = styled(Link)`
    height: 25px;
    padding: 22px 0px;
    margin: 0px 40px;
    text-decoration: none;
    color: #4a4a4a;
    font-size: 20px;
    border-bottom: white solid 3px;
    &:hover {
        border-color: #ccc;
    }
    ${props => props.active && `
        border-color: #e47d31;
        font-weight: bold;
        &:hover { border-color: #e47d31; }
    `}
`;

const NavSectionRight = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const ActionButton = styled(Link)`
    padding: 11px 30px;
    background: #e47d31;
    font-size: 16px;
    color: white;
    text-decoration: none;
    &:hover {
        background: #e98539;
    }
`;

const SignUpButton = styled(ActionButton)`
    border-top-left-radius: 28px;
    border-bottom-left-radius: 28px;
`;
const LoginButton = styled(ActionButton)`
    border-top-right-radius: 28px;
    border-bottom-right-radius: 28px;
    margin-left: 1px;
    margin-right: 20px;
`;

class NavBar extends Component {
    isActive (name) {
        return this.props.location === name;
    };

    render() {
        return (
            <NavigationBar>
                <Links to='/'><LunaLogo src={logo} alt="Luna"/></Links>
                <NavSectionRight>
                    <Menu>
                        <MenuItem to="/" active={this.isActive('home')}>Home</MenuItem>
                        <MenuItem to="/search" active={this.isActive('search')}>Search</MenuItem>
                        <MenuItem to="/userprofile" active={this.isActive('profile')}>Profile</MenuItem>
                    </Menu>
                    <SignUpButton to="/register">SIGNUP</SignUpButton>
                    <LoginButton to="/login">LOGIN</LoginButton>
                </NavSectionRight>

            </NavigationBar>
        )
    }
};

export default NavBar;