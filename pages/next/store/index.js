import { HomeLayout } from 'components'
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';

import HelpIcon from '@material-ui/icons/Help';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';


export default function Content(props) {
    const classes = useStyles();
    return (<HomeLayout>
        <AppBar
            component="div"
            className={classes.secondaryBar}
            color="primary"
            position="static"
            elevation={0}
        >
            <Toolbar>
                <Grid container alignItems="center" spacing={1}>
                    <Grid item xs>
                        <Typography color="inherit" variant="h5" component="h1"> Pesan Siaran </Typography>
                    </Grid>
                    <Grid item>
                        <Button className={classes.button} variant="outlined" color="inherit" size="small">
                            Web setup
                            </Button>
                    </Grid>
                    <Grid item>
                        <Tooltip title="Help">
                            <IconButton color="inherit">
                                <HelpIcon />
                            </IconButton>
                        </Tooltip>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
        <AppBar
            component="div"
            className={classes.secondaryBar}
            color="primary"
            position="static"
            elevation={0}
        >
            <Tabs value={0} textColor="inherit">
                <Tab textColor="inherit" label="Siaran " />
                <Tab textColor="inherit" label="Buat Siaran" />
            </Tabs>
        </AppBar>

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
                                <Button variant="contained" color="primary" className={classes.addUser}>
                                    Add user
              </Button>
                                <Tooltip title="Reload">
                                    <IconButton>
                                        <RefreshIcon className={classes.block} color="inherit" />
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <div className={classes.contentWrapper}>
                    <Typography color="textSecondary" align="center"> No users for this project yet </Typography>
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
        padding: theme.spacing(4, 4),
        background: '#eaeff1',
    },
}));


// export default withStyles(styles)(Content);