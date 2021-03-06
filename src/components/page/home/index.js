import { React } from 'libraries'
import { Paper, AppBar, Toolbar, Typography, CardHeader } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from "@material-ui/core/styles";
import dynamic from 'next/dynamic'

import { IsOnline } from "./IsOnline";



const GoogleChart = dynamic(
    () => import('react-google-charts'),
    { loading: () => <p>...</p> }
)

export default function Index(props) {
    const { auth } = props;
    const classes = useStyles();
    return (<main>
        <Grid container direction="row" spacing={2}>
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
                <Paper className={classes.paper}>
                    <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                        <Toolbar>
                            <Typography> Kode Partner </Typography>
                        </Toolbar>
                    </AppBar>
                    <div className={classes.contentWrapper}>
                        <Typography color="textSecondary" align="center"> {JSON.stringify(auth.googleId)} </Typography>
                    </div>
                </Paper>
            </Grid>

            <Grid item xs={12} sm={12} md={3} lg={3}>
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
                        <GoogleChart
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

        <IsOnline />

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