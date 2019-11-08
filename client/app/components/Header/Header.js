'use strict';
import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

import DialogWindow from '../DialogWindow/DialogWindow';

const styles = theme => ({
    header: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
    },
    dialogTitle: {
        marginLeft: theme.spacing(2),
        flex: 1,
      }
});

class Header extends Component
{
    constructor(props)
    {
        super(props);

        this.state =
        {
            showLogin: false
        }
    }

    componentDidMount()
    {
        
    }

    openLogin()
    {
        this.setState({
            showLogin: true
        })
    }

    closeLogin()
    {
        this.setState({
            showLogin: false
        })
    }
 
    /**
     * @todo Replace temporary menu
     * @body The temporary header menu needs to be replaced with a material-ui app-bar.
     */
    render()
    {
        const { classes } = this.props;

        return (
            <div className={classes.header}>
                <AppBar position="fixed">
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            history.day
                        </Typography>
                        <Button color="inherit" onClick={ () => this.openLogin() }>
                            Login
                        </Button>
                    </Toolbar>
                </AppBar>

                <DialogWindow
                    open={ this.state.showLogin }
                    title="Login"
                    close={ () => this.closeLogin() }
                    buttons={
                        [
                            { title: 1 },
                            { title: "3" }
                        ]
                    }>
                    <p>asdf</p>
                </DialogWindow>
            </div>
        )
    }
}

export default withStyles(styles)(Header);

/*

<Dialog fullScreen open={ this.state.showLogin } onClose={ this.closeLogin.bind(this) } >
                    <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={ this.closeLogin.bind(this) } aria-label="close">
                            <CloseIcon />
                        </IconButton>
                        <Typography variant="h6" className={ classes.dialogTitle }>
                            Login
                        </Typography>
                        </Toolbar>
                    </AppBar>
                </Dialog>


*/
/*
<header>
                <nav id="topMenu">
                    <ul>
                        <li>
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login" activeClassName="active">Login</NavLink>
                        </li>
                        <li>
                            <NavLink to="/entries" activeClassName="active">Entries</NavLink>
                        </li>
                        <li>
                            <NavLink to="/newEntry" activeClassName="active">New Entry</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
*/