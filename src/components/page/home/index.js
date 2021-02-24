import { Link, React, PropTypes } from 'libraries'
import { Paper, AppBar, Hidden, Toolbar, Typography, CardHeader, Avatar, IconButton } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { MoreVertIcon } from 'icons';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import { makeStyles } from "@material-ui/core/styles";
import { Chart } from "react-google-charts";


export default function Index() {
    const classes = useStyles();
    return (<main>

        <Grid container direction="row" spacing={2}>
            <Hidden smDown>
                <Grid item xs={12} sm={12} md={3} lg={3}>
                    <CardHeader
                        avatar={<Avatar aria-label="recipe" className={classes.avatar}> R </Avatar>}
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title="Sandi Fadilah"
                        subheader="September 14, 2016"
                    />
                </Grid>
            </Hidden>

            <Grid item xs={12} sm={12} md={3} lg={3}>
                <Paper className={classes.paper}>
                    <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                        <Toolbar>
                            <Typography> Kode Partner </Typography>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.contentWrapper}>
                        <Typography color="textSecondary" align="center"> No users for this project yet </Typography>
                    </div>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Grid container direction="row" spacing={1}>
                    {[1, 2, 3, 4].map((i) => (
                        <Grid key={i} item xs={6} md={6}>
                            <Paper className={classes.paper}>
                                <CardHeader
                                    title="120"
                                    subheader="Relawan"
                                />
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Grid>

        <br />
        <Grid container direction="row" spacing={2}>
            <Grid item xs={12} sm={12} md={3} lg={3}>
                <Paper className={classes.paper}>
                    <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                        <Toolbar>
                            <Typography> Demografi Politik </Typography>
                        </Toolbar>
                    </AppBar>
                    <Typography> Pilkada 2022 </Typography>
                    <div className={classes.contentWrapper}>
                        <Typography color="textSecondary" align="center"> No users for this project yet </Typography>
                    </div>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3}>
                <Paper className={classes.paper}>
                    <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                        <Toolbar>
                            <Typography> Demografi Politik </Typography>
                        </Toolbar>
                    </AppBar>
                    <Typography> Pilkada 2022 </Typography>
                    <div className={classes.contentWrapper}>
                        <Typography color="textSecondary" align="center"> No users for this project yet </Typography>
                    </div>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
                <Paper className={classes.paper}>
                    <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                        <Toolbar>
                            <Typography> Pertumbuhan Relawan </Typography>
                        </Toolbar>
                    </AppBar>
                    <div>
                        <Chart
                            width={'100%'}
                            height={'400px'}
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
                </Paper>
            </Grid>
        </Grid>
    </main>)
}




const useStyles = makeStyles(theme => ({
    paper: {
        // maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
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
    contentCart: {
        margin: '5px 16px',
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