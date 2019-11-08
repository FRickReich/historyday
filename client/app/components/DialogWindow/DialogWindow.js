'use strict';

import React, { Component } from 'react';
import 'whatwg-fetch';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';

const styles = theme => ({
    dialogAppBar: {
        position: 'fixed',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    content: {
        paddingTop: 60
    }
});

class DialogWindow extends Component
{
    constructor(props) 
    {
        super(props);
    }

    closeDialog()
    {
        this.props.close(false);
    }

    render()
    {
        const { classes, title, children, buttons } = this.props;

        return (
            <Dialog
                fullScreen
                open={ this.props.open }
                onClose={ () => this.closeDialog() }
            >
                <AppBar
                    position="fixed"
                    className={ classes.appBarTitle }
                >
                    <Toolbar>
                        <Typography
                            variant="h6"
                            className={ classes.title }
                        >
                            { title }
                        </Typography>
                        <IconButton
                            edge="start"
                            onClick={ () => this.closeDialog() }
                            color="inherit"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Toolbar>
                </AppBar>

                <DialogContent className={ classes.content }>
                    { children }
                </DialogContent>

                {
                    buttons &&
                    <DialogActions>
                    {
                        buttons.map((button, i) => {
                            return (
                                <Button key={ i } variant="contained" color="primary">
                                    { button.title }
                                </Button>
                            )
                        })
                    }
                    </DialogActions>
                }

            </Dialog>
        )
    }
}

export default withStyles(styles)(DialogWindow);
