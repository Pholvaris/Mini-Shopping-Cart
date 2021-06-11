import React from 'react'
//import navbar element from file with styled-component
import {Nav, NavLink} from './NavbarElement';
import mainlogo from '../Logo/shoppinglogo.png'
import cartlogo from '../Logo/cartlogo.png'
function Navbar(props) {
    return (
        <Nav>
            <NavLink to='/'>
                  <img src = {mainlogo} alt = "logo" width="80" height="80"/>Shopping Website
            </NavLink>
           
            <NavLink to='/' activeStyle>
              CART &nbsp;<img src = {cartlogo} alt = "logo" width="30" height="30"/> &nbsp;&nbsp;&nbsp;
                {props.countCartItems ? (<button className="badge">{props.countCartItems}</button>) :  (<button className="badge">0</button>)}
            </NavLink>
        </Nav>
    )
}

export default Navbar