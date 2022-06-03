import React from "react";
import styled from "styled-components";
import logo from './logo.png'
import ReactDOM from "react-dom";


const StyledHeader = styled.div`
    height: 20vh;
    background-color: #465775;
    padding: 0 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo-container{
        flex: 0.5;

        img{
            height: 20vh;
        }
    }

    .menu-container{
        flex: 1;
    }

    ul{
        list-style: none;
    }

    ul li{
        float: left;
        color: white;
    }

    ul li:not(:first-child){
        margin-left:20px;
    }

    nav{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    button {
        background-color: #bce5bf;
        padding: 5px 20px;
        border: none;
    }


`


const Header = () => {

    return <StyledHeader>
        <div className="logo-container">
            <img src={logo} alt="logo" />
        </div>
        <nav className="menu-container">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    </StyledHeader>
}

export default Header