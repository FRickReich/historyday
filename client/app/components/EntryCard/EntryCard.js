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
    ellipsis: {
        textOverflow: 'ellipsis',
        width: '100%',
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    }
});
  
class EntryCard extends Component
{
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props) 
    {
        super(props);

        this.state =
        {
            
        }
    }

    render()
    {
        const { classes, entry } = this.props;

        return (
            <Card>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="https://via.placeholder.com/250x150"
                        title={ entry.title }
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2" className={ classes.ellipsis }>
                            { entry.title }
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" className={ classes.ellipsis }>
                            { entry.subTitle }
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )
    }
}

export default withStyles(styles)(EntryCard);

/*
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
                                            <Typography variant="body2" color="textSecondary" component="p" className={ classes.ellipsis }>
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
                                */