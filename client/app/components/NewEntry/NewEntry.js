'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';

import {
    currentDate,
    maxDaysOfMonth,
    getFromStorage
} from '../../utils';

class NewEntry extends Component
{
    constructor(props) 
    {
        super(props);

        this.state =
        {
            token: '',
            isLoading: false,
            userData: [  ],
            formControls:
            {
                title:
                {
                    value: ''
                },
                subTitle:
                {
                    value: ''
                },
                image:
                {
                    value: ''
                },
                day:
                {
                    value: currentDate().day
                },
                month:
                {
                    value: currentDate().month
                },
                year:
                {
                    value: currentDate().year
                },
                text:
                {
                    value: ''
                },
                author:
                {
                    value: ''
                },
                tags:
                {
                    value: []
                }
            }
        }
    }

    componentDidMount()
    {
        const obj = getFromStorage('gandhi');

        if (obj && obj.token) 
        {
            const { token } = obj;
            
            // Verify token
            fetch('/api/account/verify?token=' + token)
            .then(res => res.json())
            .then(json =>
                {
                    if (json.success)
                    {
                        this.getUserInfo();
                        
                        this.setState({
                            token,
                            isLoading: false
                        });
                    }
                    else
                    {
                        this.setState({
                            isLoading: false,
                            userData: [  ]
                        });
                    }
                });
        }
    }

    getUserInfo()
    {
        const obj = getFromStorage('gandhi');

        if (obj && obj.token) 
        {
            const { token } = obj;
            
            // Verify token
            fetch('/api/account/?id=' + token)
            .then(res => res.json())
            .then(json =>
            {
                console.log(json);

                if (json.success)
                {
                    this.setState({
                        isLoading: false,
                        userData: json.data
                    });
                }
            });
        }
        else
        {
            this.setState({
                isLoading: false,
            });
        }
    }

    changeHandler(event)
    {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
          formControls: {
              ...this.state.formControls,
                [name]: {
              ...this.state.formControls[name],
              value
            }
          }
        });
    }

    createEntry()
    {
        const { formControls, userData } = this.state;

        fetch('/api/entries/new', 
        {
            method: 'POST',
            headers:
            {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(this.state.formControls),
            body: JSON.stringify({
                title: formControls.title.value,
                subTitle: formControls.subTitle.value,
                image: formControls.image.value,
                day: formControls.day.value,
                month: formControls.month.value,
                year: formControls.year.value,
                text: formControls.text.value,
                author: userData.email,
                tags: formControls.tags.value
            })
        })
        .then(res => res.json())
        .then(json =>
        {
            console.log("created new entry");
        });
    }

    render()
    {
        const { formControls } = this.state;

        return (
            <div>
                
                <h1>Entries</h1>

                {
                    this.state.isLoading && <p>loading</p>
                }
                <h3>Create new Entry</h3>
                <label>title:<br/>
                    <input
                        name="title"
                        placeholder="Please insert a title..."
                        value={ formControls.title.value }
                        onChange={this.changeHandler.bind(this)}
                    />
                    <br />
                </label>
                <label>subtitle:<br/>
                    <input
                        name="subTitle"
                        placeholder="Please insert a subtitle..."
                        value={ formControls.subTitle.value }
                        onChange={this.changeHandler.bind(this)}
                    />
                    <br />
                </label>
                <label>image URL:<br/>
                    <input
                        name="image"
                        placeholder="Please insert image URL..."
                        value={ formControls.image.value }
                        onChange={this.changeHandler.bind(this)}
                    />
                    <br />
                </label>
                <label>day:<br/>
                    <input
                        name="day"
                        type="number"
                        min="1"
                        max={ maxDaysOfMonth(currentDate().month, currentDate().year )}
                        value={ formControls.day.value }
                        onChange={this.changeHandler.bind(this)}
                    />
                    <br />
                </label>
                <label>month:<br/>
                    <select
                        name="month"
                        defaultValue={ formControls.month.value }
                        onChange={this.changeHandler.bind(this)}
                    >
                        <option value="1">January</option>
                        <option value="2">February</option>
                        <option value="3">March</option>
                        <option value="4">April</option>
                        <option value="5">May</option>
                        <option value="6">June</option>
                        <option value="7">July</option>
                        <option value="8">August</option>
                        <option value="9">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                    </select>
                    <br />
                </label>
                <label>year:<br/>
                    <input
                        name="year"
                        type="number"
                        value={ formControls.year.value }
                        onChange={this.changeHandler.bind(this)}
                    />
                    <br />
                </label>
                <label>text:<br/>
                    <textarea
                        name="text"
                        rows="5"
                        cols="30"
                        placeholder="Please insert text..."
                        value={ formControls.text.value }
                        onChange={this.changeHandler.bind(this)}
                    />
                    <br />
                </label>

                <label>tags:<br/>
                    <input
                        name="tags"
                        type="text"
                        value={ formControls.tags.value }
                        onChange={this.changeHandler.bind(this)}
                    />
                    <br />
                </label>

                <button onClick={ this.createEntry.bind(this) }>Save</button>
            </div>
        )
    }
}

export default NewEntry;
