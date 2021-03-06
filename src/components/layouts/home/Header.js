import React from 'react';
import PropTypes from 'prop-types';
import { AppBar, CardHeader } from '@material-ui/core';
import { ArrowBackIcon, MoreVertIcon } from 'icons';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import { MenuIcon, HomeIcon, HelpIcon } from 'icons';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'



const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme) => ({
    secondaryBar: {
        zIndex: 0,
    },
    menuButton: {
        marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
        padding: 3,
    },
    link: {
        textDecoration: 'none',
        color: lightColor,
        '&:hover': {
            color: theme.palette.common.white,
        },
    },
    button: {
        borderColor: lightColor,
    },
});

function Header(props) {
    const { classes, onDrawerToggle, title } = props;
    const router = useRouter()

    return (
        <React.Fragment>

            <AppBar
                color="primary"
                position="sticky" elevation={0}>
                <Toolbar>
                    <Grid container spacing={1} alignItems="center">
                        <Grid item>
                            {router.pathname === '/' ?
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={onDrawerToggle}
                                    className={classes.menuButton}
                                >
                                    <HomeIcon />
                                </IconButton>
                                :
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    component={Link}
                                    href="/"
                                    className={classes.menuButton}
                                >
                                    <ArrowBackIcon />
                                </IconButton>
                            }
                        </Grid>

                        <Grid item xs>
                            <Typography color="inherit" variant="h5" component="h1"> {title ? title : 'NetCount'}  </Typography>
                        </Grid>

                        <Grid item>
                            <Tooltip title="Alerts • No alerts">
                                <IconButton color="inherit">
                                    <NotificationsIcon />
                                </IconButton>
                            </Tooltip>
                        </Grid>

                        <Hidden smDown>
                            <Grid item>
                                <CardHeader
                                    avatar={<Avatar aria-label="recipe" src="https://source.unsplash.com/random" className={classes.avatar} />}
                                    title="Sandi Fadilah"
                                    subheader="September 14, 2016"
                                />
                            </Grid>
                        </Hidden>

                    </Grid>
                </Toolbar>
            </AppBar>
        </React.Fragment>
    );
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
    onDrawerToggle: PropTypes.func.isRequired,
};

export default withStyles(styles)(Header);