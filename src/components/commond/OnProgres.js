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


export default function OnProgres() {
    const classes = useStyles();
    return (<HomeLayout title="On Progress Page">
        <AppBar
            component="div"
            className={classes.secondaryBar}
            color="primary"
            position="static"
            elevation={0}
        >
            <Tabs value={0} textColor="inherit">
                <Tab textColor="inherit" label="Main" />
            </Tabs>
        </AppBar>

        <main className={classes.main}>
            <Typography color="textSecondary" align="center"> Sory, this page on proggress </Typography>
        </main>
    </HomeLayout>);
}


const useStyles = makeStyles(theme => ({
    secondaryBar: {
        zIndex: 0,
    },
    main: {
        flex: 1,
        padding: theme.spacing(4, 4),
        background: '#eaeff1',
    },
}));
