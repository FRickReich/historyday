'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';
  
class Home extends Component
{
    constructor(props) 
    {
        super(props);

        this.state =
        {
            open: false
        }
    }

    render()
    {
        return (
            <div>
                <h1>Home</h1>
            </div>
        )
    }
}

export default Home;
