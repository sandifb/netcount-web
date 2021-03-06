import { React, useState, PropTypes, Link, Private } from 'libraries'
import { HomeLayout, TeamNav } from 'components'
import { makeStyles, withStyles } from "@material-ui/core/styles";

import {
    AppBar, Hidden, Toolbar, Typography, Paper,
    Grid, Button, TextField, Tooltip, IconButton,
} from '@material-ui/core';

import { SearchIcon, AddIcon, ExpandLessIcon, ExpandMoreIcon, CloseIcon } from 'icons';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

export default Private(List);
function List(props) {
    const classes = useStyles();
    const [filter, setFilter] = useState(false);

    return (<HomeLayout title="Timses">

        <TeamNav />

        <main className={classes.search}>

            {filter &&
                <div>
                    <Grid direction="row" container spacing={1}>
                        <Grid item xs={3} md={2} lg={2}>
                            <Typography> FILTER AREA </Typography>
                        </Grid>
                        <Grid item xs={3} md={2} lg={2}>
                            <Typography> FILTER AREA </Typography>
                        </Grid>
                        <Grid item xs={3} md={2} lg={2}>
                            <Typography> FILTER AREA </Typography>
                        </Grid>
                        <Grid item xs={3} md={2} lg={2}>
                            <Typography> FILTER AREA </Typography>
                        </Grid>
                        <Grid item xs={3} md={2} lg={2}>
                            <Typography> FILTER AREA </Typography>
                        </Grid>
                        <Grid item xs={3} md={2} lg={2}>
                            <Typography> FILTER AREA </Typography>
                        </Grid>
                        <Grid item xs={3} md={2} lg={2}>
                            <Typography> FILTER AREA </Typography>
                        </Grid>
                    </Grid>
                </div>
            }


            <Paper className={classes.paper}>
                <AppBar className={classes.searchBar} position="static" color="default" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item xs>
                                <Button onClick={() => setFilter(!filter)} startIcon=
                                    {filter ?
                                        <ExpandLessIcon />
                                        :
                                        <ExpandMoreIcon />
                                    } className={classes.margin}>
                                    {filter ? 'Tutup ' : 'Buka '}
                                     Pencarian </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" color="primary" className={classes.addUser}> Tambah Pendukung </Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>

                <div>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dessert (100g serving)</TableCell>
                                    <TableCell align="right">Calories</TableCell>
                                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.name}>
                                        <TableCell component="th" scope="row">
                                            {row.name}
                                        </TableCell>
                                        <TableCell align="right">{row.calories}</TableCell>
                                        <TableCell align="right">{row.fat}</TableCell>
                                        <TableCell align="right">{row.carbs}</TableCell>
                                        <TableCell align="right">{row.protein}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </Paper>


        </main>
    </HomeLayout>);
}



function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const useStyles = makeStyles(theme => ({
    table: {
        minWidth: 650,
    },
    button: {
        margin: theme.spacing(1),
    },
    margin: {
        margin: theme.spacing(0, 1, 0, 0),
    },
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
    search: {
        flex: 1,
        background: '#eaeff1',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(1, 1),
        },
        [theme.breakpoints.down('sm')]: {
            // padding: theme.spacing(2, 1.2),
        },
    },
}));


// export default withStyles(styles)(Content);