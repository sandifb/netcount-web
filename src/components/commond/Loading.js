import React from 'react';
// material-ui
import { Typography, Container, LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


function Loading() {
    const classes = useStyles();
    return (
        <Container maxWidth="xs">
            <div className={classes.loadingBox}>
                <Typography
                    variant="h6"
                    component="h2"
                    className={classes.title}
                >
                    NETCOUNT
                </Typography>
                <LinearProgress />
            </div>
        </Container>
    )
}

export default Loading;


const useStyles = makeStyles(theme => ({
    title: {
        color: theme.palette.primary.main,
        textAlign: 'center'
    },

    loadingBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: '80vh'
    }
}));
