'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = theme => ({
    footer: {
        position: 'fixed',
        width: '100%',
        bottom: 0
    }
});

/**
 * @todo Plan and create footer
 * @body The footer of the application should contain important elements, or not be there at all.
 */
class Footer extends Component 
{
    static propTypes = {
        classes: PropTypes.object.isRequired,
    };

    constructor(props)
    {
        super(props);
    }

    render()
    {
        const { classes } = this.props;

        return (
            <>
                {/*<BottomNavigation
                    className={ classes.footer }>
                >
                    <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                    <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                    <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
                </BottomNavigation>*/}
            </>
        )
    }
}

export default withStyles(styles)(Footer);