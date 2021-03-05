import { React, Link } from 'libraries';
import { useRouter } from 'next/router'
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import { HomeIcon, HowToVoteIcon, GroupIcon, BurstModeIcon, EqualizerIcon, AppsIcon, SendIcon, StorefrontIcon, LabelIcon } from 'icons';

const categories = [
    {
        id: 'Pilkada',
        children: [
            { id: 'Timses', icon: <GroupIcon />, link: '/team' },
            { id: 'Logistik', icon: <BurstModeIcon />, link: '/logistik' },
            { id: 'Survey', icon: <EqualizerIcon />, link: '/survey' },
            { id: 'Aplikasi', icon: <AppsIcon />, link: '/app' },
            {
                id: 'Dashboard',
                icon: <HomeIcon />,
                link: '/home',
                active: true
            },
            { id: 'Pemilu', icon: <HowToVoteIcon />, link: '/election' },
        ],
    },
    {
        id: 'Lainnya',
        children: [
            { id: 'Siaran', icon: <SendIcon />, link: '/next/broadcast' },
            { id: 'Store', icon: <StorefrontIcon />, link: '/next/store' },
            { id: 'Tiket', icon: <LabelIcon />, link: '/next/ticket' },
        ],
    },
];

const styles = (theme) => ({
    categoryHeader: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    categoryHeaderPrimary: {
        color: theme.palette.common.white,
    },
    item: {
        paddingTop: 1,
        paddingBottom: 1,
        color: 'rgba(255, 255, 255, 0.7)',
        '&:hover,&:focus': {
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
        },
    },
    itemCategory: {
        backgroundColor: '#232f3e',
        boxShadow: '0 -1px 0 #404854 inset',
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
    },
    firebase: {
        fontSize: 24,
        color: theme.palette.common.white,
    },
    itemActiveItem: {
        color: '#4fc3f7',
    },
    itemPrimary: {
        fontSize: 'inherit',
    },
    itemIcon: {
        minWidth: 'auto',
        marginRight: theme.spacing(2),
    },
    divider: {
        marginTop: theme.spacing(2),
    },
});

function Navigator(props) {
    const { classes, ...other } = props;
    const router = useRouter()

    return (
        <Drawer variant="permanent" {...other}>
            <List disablePadding>
                <ListItem className={clsx(classes.firebase, classes.item, classes.itemCategory)}> {process.env.appName} </ListItem>
                <ListItem className={clsx(classes.item, classes.itemCategory)}>
                    <ListItemIcon className={classes.itemIcon}>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText
                        classes={{
                            primary: classes.itemPrimary,
                        }}
                    >
                        Selasa <br />
                        <small>12-02-2020</small>
                    </ListItemText>
                </ListItem>
                {categories.map(({ id, children }) => (
                    <React.Fragment key={id}>
                        <ListItem className={classes.categoryHeader}>
                            <ListItemText
                                classes={{
                                    primary: classes.categoryHeaderPrimary,
                                }}
                            >
                                {id}
                            </ListItemText>
                        </ListItem>
                        {children.map(({ id: childId, icon, link }) => (
                            <ListItem
                                component={Link}
                                href={link}
                                key={childId}
                                button
                                className={clsx(classes.item, router.pathname === link ? classes.itemActiveItem : '')}
                            >
                                <ListItemIcon className={classes.itemIcon}>{icon}</ListItemIcon>
                                <ListItemText
                                    classes={{
                                        primary: classes.itemPrimary,
                                    }}
                                >
                                    {childId}
                                </ListItemText>
                            </ListItem>
                        ))}

                        <Divider className={classes.divider} />
                    </React.Fragment>
                ))}
            </List>
        </Drawer>
    );
}

Navigator.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navigator);