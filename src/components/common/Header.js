"use strict";
import React from 'react';

class Header extends React.Component {
    render() {
        return <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
    }
}

export default Header
