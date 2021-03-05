import { React, Link } from 'libraries'
import { HomeLayout, TeamNav } from 'components'
import { makeStyles } from "@material-ui/core/styles";
// import { Chart } from "react-google-charts";

import {
    AppBar, Toolbar, Typography, Paper,
    Grid, Button, TextField, Tooltip, IconButton,
    List, ListItemAvatar, ListItem, Avatar, ListItemText
} from '@material-ui/core';

import { SearchIcon } from 'icons';
import RefreshIcon from '@material-ui/icons/Refresh';
import dynamic from 'next/dynamic'


const GoogleChart = dynamic(
    () => import('react-google-charts'),
    { loading: () => <p>...</p> }
)


export default function Content() {
    const classes = useStyles();
    return (<HomeLayout title="Timses">

        <TeamNav />

        <main className={classes.main}>

            <Grid container spacing={2} alignItems="center">
                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Paper className={classes.paper}>
                        <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                            <Toolbar>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs>
                                        <Typography variant="h6" color="textSecondary"> Statistik Timses </Typography>
                                    </Grid>

                                    <Grid item>
                                        <Button component={Link} href="/team/map" variant="contained" color="primary" className={classes.addUser}> Buka Peta </Button>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>
                        <div>
                            <div>
                                <GoogleChart
                                    width={'100%'}
                                    height={'305px'}
                                    chartType="LineChart"
                                    loader={<div>Loading Chart</div>}
                                    data={[
                                        ['x', 'Laki-Laki', 'Perempuan'],
                                        [0, 0, 2],
                                        [1, 10, 20],
                                        [2, 23, 21],
                                        [3, 17, 3],
                                        [4, 18, 4],
                                        [5, 9, 8],
                                        [6, 11, 10],
                                        [7, 27, 11],
                                        [8, 33, 13],
                                        [9, 40, 16],
                                        [10, 32, 9],
                                        [11, 35, 22],
                                    ]}
                                    options={{
                                        isStacked: 'relative',
                                        explorer: { axis: 'horizontal', keepInBounds: true },
                                        legend: { position: 'top', maxLines: 3 },
                                        hAxis: {
                                            title: 'Time',
                                        },
                                        // vAxis: {
                                        //     title: 'Popularity',
                                        // },
                                        vAxis: { minValue: 0 },
                                        chartArea: { width: '90%', height: '70%' },
                                    }}
                                    rootProps={{ 'data-testid': '1' }}
                                />
                            </div>

                        </div>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6} md={6} lg={6}>
                    <Paper className={classes.paper}>
                        <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                            <Toolbar>
                                <Grid container spacing={2} alignItems="center">
                                    <Grid item xs>
                                        <Typography variant="h6" color="textSecondary"> TOP Tim </Typography>
                                    </Grid>
                                </Grid>
                            </Toolbar>
                        </AppBar>

                        <div>
                            <List className={classes.root}>
                                {[1, 2, 3, 4].map((i) => (
                                    <ListItem key={i}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <SearchIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                    </ListItem>
                                ))}
                            </List>
                        </div>

                    </Paper>
                </Grid>
            </Grid>

            <Paper className={classes.paper}>
                <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Typography variant="h6" color="textSecondary"> Pendukung Baru </Typography>
                            </Grid>
                            <Grid item>
                                <Button component={Link} href="/team/list" variant="contained" color="primary" className={classes.addUser}> Lihat Semua </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <List className={classes.root}>
                                {[1, 2, 3, 4].map((i) => (
                                    <ListItem key={i}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <SearchIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                        <Grid item xs={12} sm={12} md={6} lg={6}>
                            <List className={classes.root}>
                                {[1, 2, 3, 4].map((i) => (
                                    <ListItem key={i}>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <SearchIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>

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