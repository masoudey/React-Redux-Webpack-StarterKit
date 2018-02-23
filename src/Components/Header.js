import React, {Component} from "react";
import {NavLink, Link} from "react-router-dom";

import logo from '../logo.svg';

export default class Header extends Component {
    render(){
        return(
            <header class="App-header">
               
               
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/Works">Works</NavLink>
                    
                
                
            </header>
        );
    }
}