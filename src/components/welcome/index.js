import { Link, useEffect, useState } from 'libraries'
import { LoginHooks, Loading } from 'components'
import { makeStyles } from "@material-ui/core/styles"
import { Button } from '@material-ui/core'


export default function Welcome() {
    const classes = useStyles();
    const [up, setUp] = useState(true);

    useEffect(() => {
        const timeoutID = window.setTimeout(() => {
            setUp(false)
        }, 2000);
        return () => window.clearTimeout(timeoutID);
    }, []);


    if (up) {
        return <Loading />
    }

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
