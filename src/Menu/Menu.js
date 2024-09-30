
import React from 'react';

import {
  Link
} from "react-router-dom";


function Menu() {
  return (
    <nav  role="navigation"
    aria-label="Main menu"
    itemScope
    itemType="https://schema.org/SiteNavigationElement">
        <ul>
        <li><Link itemProp='url' to="/">HomePage</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/login">Login</Link></li>
            
            <li><a href="https://www.bing.com" target="_blank">Bing</a></li>
        </ul>
    </nav>
  );
}

export default Menu;
