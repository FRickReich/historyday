'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';

import {
    addZeroToNumber
} from '../../utils/date';

class Entries extends Component
{
    constructor(props) 
    {
        super(props);

        this.state =
        {
            token: '',
            loading: false,
            entries: [  ]
        }
    }

    componentDidMount()
    {
        fetch('/api/entries')
        .then(res => res.json())
        .then(json =>
        {
            this.setState({
                entries: json
            });
        });
    }

    render()
    {
        const { entries } = this.state;
        
        console.log(entries);

        return (
            <div>
                
                <h1>Entries</h1>

                {
                    this.state.loading && <p>loading</p>
                }
                
                {
                    entries.map((entry, i) => {
                        return (
                            <div key={ i }>
                                <h5>{ entry.title }</h5>
                                <img src={ entry.image } />
                                <p>url: { entry.url }</p>
                                <br/>
                                <span>
                                    { addZeroToNumber(entry.dateDay) }/{ addZeroToNumber(entry.dateMonth) }/{ entry.dateYear }
                                </span>
                                <br />
                                <i>{ entry.author }</i>
                                <p>{ entry.text }</p>
                                <p>tags:</p>
                                <ul>
                                    {
                                        entry['tags'].map((tag, i) =>
                                        {
                                            return (
                                                <li key={ i }><a href="#">{ tag }</a></li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default Entries;
