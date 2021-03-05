import { React, Link, useState } from 'libraries'
import {
    AppBar, Tabs, Tab,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { useRouter } from 'next/router'


export default function Nav() {
    const classes = useStyles();
    const router = useRouter()
    const [tab, setTab] = useState(router.pathname === '/team/list' ? 1 : 0);

    return (<AppBar
        component="div"
        className={classes.secondaryBar}
        color="secondary"
        position="static"
        elevation={0}
    >
        <Tabs value={tab} textColor="inherit">
            <Tab component={Link} href="/team" textColor="inherit" label={`Statistik`} />
            <Tab component={Link} href="/team/list" textColor="inherit" label="Pendukung" />
        </Tabs>
    </AppBar>);
}



const useStyles = makeStyles(() => ({

    secondaryBar: {
        zIndex: 0,
    },

}));

