import { HomeLayout } from 'components'
import { React, PropTypes, Link } from 'libraries'
import { AppBar, List, ListItem, ListItemText, Divider, CardHeader, Menu, MenuItem, Hidden } from '@material-ui/core';
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

import { HelpIcon, MoreVertIcon } from 'icons';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';


export default function Content(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuOptions = [
        {
            'id': 'Informasi',
            'link': '/',
        },
        {
            'id': 'Data DPT',
            'link': '/',
        },
        {
            'id': 'Data TPS',
            'link': '/',
        },
        {
            'id': 'Quick Count',
            'link': '/',
        },
        {
            'id': 'Real Count',
            'link': '/',
        },
        {
            'id': 'Saksi',
            'link': '/',
        },
        {
            'id': 'Pengaturan',
            'link': '/',
        },
    ];



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
                <Grid item xs={12} sm={12} md={2} lg={2}>
                    <Hidden smUp>
                        <CardHeader
                            action={<>
                                <IconButton aria-label="settings" onClick={handleClick}>
                                    <MoreVertIcon />
                                </IconButton>

                                <Menu
                                    id="long-menu"
                                    anchorEl={anchorEl}
                                    keepMounted
                                    open={open}
                                    onClose={handleClose}
                                    PaperProps={{
                                        style: {
                                            maxHeight: 400,
                                            width: '15ch',
                                        },
                                    }}
                                >
                                    {menuOptions.map((item, i) => (
                                        <MenuItem key={i} selected={item.id === 'Informasi'} onClick={handleClose}>
                                            {item.id}
                                        </MenuItem>
                                    ))}
                                </Menu>

                            </>}
                            title="Pilgub "
                            subheader="Prov. Sumbar 2020"
                        />
                    </Hidden>

                    <Hidden smDown>
                        <List component={Paper} aria-label="secondary mailbox folders">
                            {menuOptions.map((item, i) => (<div key={i}>
                                <ListItem button>
                                    <ListItemText primary={item.id} />
                                </ListItem>
                                <Divider variant="light" component="li" />
                            </div>))}
                        </List>

                        <Typography> Saksi Terpenuhi</Typography>
                        <Typography> 30% (120 Orang)</Typography>
                    </Hidden>
                </Grid>

                <Grid item xs={12} sm={12} md={10} lg={10}>
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