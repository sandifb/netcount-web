import { React, PropTypes, Link } from 'libraries'
import { PageHome } from 'components'

import { HomeLayout } from 'components'
import { AppBar, Box, Hidden, CardHeader, Avatar, ListItemIcon } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';

import HelpIcon from '@material-ui/icons/Help';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { MoreVertIcon, HomeIcon, HowToVoteIcon, GroupIcon, BurstModeIcon, EqualizerIcon, AppsIcon, SendIcon, StorefrontIcon, LabelIcon } from 'icons';


export default function Index() {
  const classes = useStyles();

  const [tab, setTab] = React.useState(0);

  const changeTab = (event, newValue) => {
    setTab(newValue);
  };

  return (<HomeLayout>

    <AppBar
      component="div"
      className={classes.secondaryBar}
      color="primary"
      position="static"
      elevation={0}
    >
      <Tabs value={tab} textColor="inherit" onChange={changeTab} >
        <Tab textColor="inherit" label="Dasboard" />
        <Tab textColor="inherit" label="Pengaturan" />
      </Tabs>
    </AppBar>

    <main className={classes.main}>
      <TabPanel value={tab} index={0}>
        <div>
          <CardHeader
            avatar={<Avatar aria-label="recipe" className={classes.avatar}> R </Avatar>}
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title="Sandi Fadilah"
            subheader="September 14, 2016"
          />

          {categories.map(({ id, children }) => (
            <React.Fragment key={id}>
              <Grid direction="row" container spacing={1}>
                {children.map(({ id: childId, icon, link }) => (
                  <Grid item key={childId} xs={3} md={1} lg={1}>
                    <Box component={Link} href={link}>
                      <Tab label={childId} icon={icon} />
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <br />
            </React.Fragment>
          ))}

        </div>
        <PageHome />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Typography> Test Form </Typography>
      </TabPanel>
    </main>
  </HomeLayout>);
}




function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};






const categories = [
  {
    id: 'Pilkada',
    children: [
      { id: 'Pemilu', icon: <HowToVoteIcon />, link: '/election' },
      { id: 'Timses', icon: <GroupIcon />, link: '/team' },
      { id: 'Logistik', icon: <BurstModeIcon />, link: '/logistik' },
      { id: 'Aplikasi', icon: <AppsIcon />, link: '/app' },
      { id: 'Siaran', icon: <SendIcon />, link: '/next/broadcast' },
      { id: 'Store', icon: <StorefrontIcon />, link: '/next/store' },
      { id: 'Berita', icon: <LabelIcon />, link: '/next/1' },
      { id: 'Survey', icon: <EqualizerIcon />, link: '/survey' },
      { id: 'Tiket', icon: <LabelIcon />, link: '/next/ticket' },
      { id: 'Profil', icon: <LabelIcon />, link: '/next/2' },
      { id: 'Setting', icon: <LabelIcon />, link: '/next/3' },
      { id: 'Keluar', icon: <LabelIcon />, link: '/next/4' },
    ],
  }
];



const useStyles = makeStyles(theme => ({
  paper: {
    // maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden',
  },
  menuGrid: {
    width: '100%',
    height: 80,
    display: 'flex'
  },
  menuGridItem: {
    margin: 'auto'
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