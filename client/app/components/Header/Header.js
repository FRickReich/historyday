'use strict';
import React, { Component } from 'react';

import { Link, NavLink } from 'react-router-dom';

class Header extends Component
{
    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {

    }

    render()
    {
        return (
            <header>
                <nav id="topMenu">
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/entries" activeClassName="active">Entries</NavLink>
                        </li>
                        <li>
                            <NavLink to="/newEntry" activeClassName="active">New Entry</NavLink>
                        </li>
                        <li>
                            <NavLink to="/error" activeClassName="active">404 Page</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

export default Header;
