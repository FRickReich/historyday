'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import EntryCard from '../EntryCard/EntryCard';

const styles = theme => ({});

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
        const { classes } = this.props;
        const { entries } = this.state;
        
        console.log(entries);

        return (
            <div>
                
                <h1>Entries</h1>

                {
                    this.state.loading && <p>loading</p>
                }
                <Grid container spacing={ 2 }>
                {
                    entries.map((entry, i) => {
                        return (
                            <Grid key={ i } item xs={ 12 } md={ 6 } lg={ 3 } >
                                <EntryCard entry={ entry } />
                            </Grid>
                        )
                    })
                }
                </Grid>
            </div>
        )
    }
}
  
export default withStyles(styles)(Entries);

                            /*<div key={ i }>
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
                                <div className={classes.tags}>
                                    {
                                        entry['tags'].map((tag, i) =>
                                        {
                                            return (
                                                <Chip
                                                    key={ i }
                                                    size="small"
                                                    icon={ <Label /> }
                                                    color="secondary"
                                                    label={ tag }
                                                    href="#"
                                                    clickable
                                                />
                                            )
                                        })
                                    }
                                </div>
                            </div>*/