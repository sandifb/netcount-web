import { HomeLayout } from 'components'
import { AppBar, List, ListItem, ListItemText, Divider, Hidden } from '@material-ui/core';
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
    return (<HomeLayout title="Pemilu">

        <AppBar
            component="div"
            className={classes.secondaryBar}
            color="primary"
            position="static"
            elevation={0}
        >
            <Tabs value={0} textColor="inherit">
                <Tab textColor="inherit" label="Pilpres" />
                <Tab textColor="inherit" label="Pilgub" />
                <Tab textColor="inherit" label="Pilwako" />
                <Tab textColor="inherit" label="DPRD Pusat" />
            </Tabs>
        </AppBar>

        <main className={classes.main}>

            <Grid container direction="row" spacing={2}>
                <Grid item sm={12} md={2} lg={2}>

                    <List component={Paper} aria-label="secondary mailbox folders">
                        <ListItem button>
                            <ListItemText primary="Informasi" />
                        </ListItem>
                        <Divider variant="light" component="li" />
                        <ListItem button>
                            <ListItemText primary="Data DPT" />
                        </ListItem>
                        <Divider variant="light" component="li" />
                        <ListItem button>
                            <ListItemText primary="Data TPS" />
                        </ListItem>
                        <Divider variant="light" component="li" />
                        <ListItem button>
                            <ListItemText primary="Quick Count" />
                        </ListItem>
                        <Divider variant="light" component="li" />
                        <ListItem button>
                            <ListItemText primary="Real Count" />
                        </ListItem>
                        <Divider variant="light" component="li" />
                        <ListItem button>
                            <ListItemText primary="Saksi" />
                        </ListItem>
                        <Divider variant="light" component="li" />
                        <ListItem button>
                            <ListItemText primary="Pengaturan" />
                        </ListItem>
                    </List>

                    <Typography> Saksi Terpenuhi</Typography>
                    <Typography> 30% (120 Orang)</Typography>
                </Grid>

                <Grid item sm={12} md={10} lg={10}>
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
                </Grid>

            </Grid>

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