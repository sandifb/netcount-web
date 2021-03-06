import { makeStyles } from "@material-ui/core/styles"
import { Link } from 'libraries'
import { LoginHooks } from 'components'
import { Button } from '@material-ui/core'


export default function Welcome() {
    const classes = useStyles();
    return (
        <main className={classes.main}>
            <h1>Auth Login </h1>
            <Button component={Link} href="/auth/login"> Login </Button>
        </main>);
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
