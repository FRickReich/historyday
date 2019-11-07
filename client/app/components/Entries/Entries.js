'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'whatwg-fetch';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
import Divider from '@material-ui/core/Divider';

import {
    addZeroToNumber,
    formatDate
} from '../../utils';

const styles = theme => ({
    tags: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(0.5),
      },
    },
    media: {
        height: 0,
        paddingTop: '56.25%',
    },
    subTitle: {
        textOverflow: 'ellipsis',
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    }
});

class Entries extends Component
{
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

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
                            <Grid key={ i } item xs={12} md={6} lg={3} >
                                <Card>
                                        <CardHeader
                                            avatar={
                                                <Avatar aria-label="date">
                                                    { addZeroToNumber(entry.dateDay) }
                                                </Avatar>
                                            }
                                            action={
                                                <IconButton aria-label="share">
                                                    <ShareIcon />
                                                </IconButton>
                                            }
                                            title={ entry.title }
                                            subheader={ formatDate(entry.dateDay, entry.dateMonth, entry.dateYear) }
                                        />

                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://via.placeholder.com/250x150"
                                            title={ entry.title }
                                        />

                                        <CardContent>
                                            <Typography variant="body2" color="textSecondary" component="p" className={ classes.subTitle }>
                                                { entry.subTitle }
                                            </Typography>

                                        </CardContent>
                                    </CardActionArea>

                                    <Divider variant="middle" />

                                    <CardContent>
                                        
                                        <div className={classes.tags}>
                                        {
                                            entry['tags'].map((tag, i) =>
                                            {
                                                return (
                                                    <Chip
                                                        key={ i }
                                                        color="primary"
                                                        label={ tag }
                                                        href="#"
                                                        clickable
                                                    />
                                                )
                                            })
                                        }
                                        </div>
                                    </CardContent>

                                </Card>
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