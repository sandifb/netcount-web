import { React, PropTypes, Link } from 'libraries'
import { HomeLayout, TeamNav } from 'components'
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
    AppBar, Hidden, Toolbar, Typography, Paper,
    Grid, Button, TextField, Tooltip, IconButton,
} from '@material-ui/core';

import { SearchIcon, AddIcon } from 'icons';
import RefreshIcon from '@material-ui/icons/Refresh';

import HelpIcon from '@material-ui/icons/Help';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';


export default function Content(props) {
    const classes = useStyles();
    return (<HomeLayout title="Timses">

        <TeamNav />

        <main className={classes.main}>


            <Paper className={classes.paper}>
                <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <SearchIcon className={classes.block} color="inherit" />
                            </Grid>
                            <Grid item xs>
                                <TextField
                                    fullWidth
                                    placeholder="Search by email address, phone number, or user UID"
                                    InputProps={{
                                        disableUnderline: true,
                                        className: classes.searchInput,
                                    }}
                                />
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" className={classes.addUser}> Tambah Pendukung </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div className={classes.contentWrapper}>
                    {[1, 2].map((i) => (
                        <div key={i}>
                            <Typography color="textSecondary" align="center"> No users for this project yet </Typography>
                            <Typography color="textSecondary" align="center"> No users for this project yet </Typography>
                            <Typography color="textSecondary" align="center"> No users for this project yet </Typography>
                            <Typography color="textSecondary" align="center"> No users for this project yet </Typography>
                        </div>
                    ))}
                </div>
            </Paper>


        </main>
    </HomeLayout>);
}


const useStyles = makeStyles(theme => ({
    paper: {
        // maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
        marginBottom: 20
    },
    searchBar: {
        borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
        fontSize: theme.typography.fontSize,
    },
    block: {
        display: 'block',
    },
    addUser: {
        marginRight: theme.spacing(1),
    },
    contentWrapper: {
        margin: '40px 16px',
    },
    secondaryBar: {
        zIndex: 0,
    },
    main: {
        flex: 1,
        background: '#eaeff1',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(4, 4),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(2, 1.2),
        },
    },
}));


// export default withStyles(styles)(Content);