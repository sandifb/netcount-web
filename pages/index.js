import { React, PropTypes, Link } from 'libraries'
import { PageHome, LogoutHooks, HomeLayout, Welcome } from 'components'
import { AppBar, Box, Hidden, CardHeader, Avatar } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import { EventIcon, MoreVertIcon, ExitToAppIcon, GroupIcon, AppsIcon } from 'icons';


export default function Index(props) {
  const classes = useStyles();
  const { auth } = props;
  const [tab, setTab] = React.useState(0);

  if (!auth) {
    return <Welcome />
  }

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

          <Hidden smUp>
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
          </Hidden>

            
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
        <PageHome auth={auth} />
      </TabPanel>
      <TabPanel value={tab} index={1}>
        <Typography> Test Form </Typography>
        <Typography> auth  {JSON.stringify(auth)}</Typography>
        <Typography> auth  {JSON.stringify(process.env.NODE_ENV)}</Typography>
        <LogoutHooks />

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
      { id: 'Timses', icon: <GroupIcon />, link: '/team' },
      { id: 'Aplikasi', icon: <AppsIcon />, link: '/app' },
      { id: 'Agenda', icon: <EventIcon />, link: '/event' },
      // { id: 'Logistik', icon: <BurstModeIcon />, link: '/logistik' },
      // { id: 'Siaran', icon: <SendIcon />, link: '/logistik' },
      // { id: 'Pemilu', icon: <HowToVoteIcon />, link: '/logistik' },
      // { id: 'Store', icon: <StorefrontIcon />, link: '/logistik' },
      // { id: 'Berita', icon: <NoteIcon />, link: '/logistik' },
      // { id: 'Survey', icon: <EqualizerIcon />, link: '/logistik' },
      // { id: 'Profil', icon: <PersonIcon />, link: '/logistik' },
      // { id: 'Setting', icon: <SettingsApplicationsIcon />, link: '/logistik' },
      { id: 'Keluar', icon: <ExitToAppIcon />, link: '/auth/login' },
    ],
  }
];



const useStyles = makeStyles(theme => ({
  paper: {
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
      padding: theme.spacing(2, 4, 4, 4),
    },
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2, 1.2),
    },
  },
}));


// export default withStyles(styles)(Content);