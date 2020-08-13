import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

import Logo from './logo.png';

class Navbar extends Component {
    render(){
        return(
            
            <nav className="navBar">
                <ul>
                    <li>
                        <NavLink exact to="/">
                            <img                                
                                src={Logo}
                                alt = 'img'
                                style={{
                                    width: '2em',
                                    height: '2em',
                                }}
                            />Home
                        </NavLink>
                    </li>
                    <li><NavLink to="/aboutme/">About Me</NavLink></li>                    
                </ul>
            </nav>
            
        );
    }
}
export default Navbar;