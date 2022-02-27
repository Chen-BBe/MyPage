import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Top from './top.js';
import Skills from './skills.js';
import Work from './work.js';
import Projects from './projects.js';
import Education from './education.js';
import Footer from './page_footer.js';

import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import CloseIcon from '@material-ui/icons/Close';



const drawerWidth = 150;

const useStyles = makeStyles(theme => ({
  base_nav: {
    marginBottom: '1vh',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '65%',
    },
  },
  menu_button: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  nav_paper: {
    backgroundColor: '#87A4FF', 
    position: 'fixed',
    width: '800px',
    top: '0%',
    left: '50%',
    marginLeft: '-400px',
  },
  nav_bar: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawerPaper: {
    backgroundColor: '#87A4FF',
    width: drawerWidth
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
}));


export default function HeadBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const list = [
    {'id': 0, 'template': <Top />},
    {'id': 1, 'template': <Skills />},
    {'id': 2, 'template': <Work />},
    {'id': 3, 'template': <Projects />},
    {'id': 4, 'template': <Education />},
  ];

  const refs = list.reduce((acc, new_value) => {
    acc[new_value.id] = React.createRef();
    return acc;
  }, {});

  const handleChange = (event, new_value) => {
    setValue(new_value);
    refs[new_value].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const drawer = (
    <Tabs
      orientation="vertical"
      value={value}
      onChange={handleChange}
      indicatorColor="secondary"
      textColor="secondary"
      centered
    >
      <Tab label="Top" />
      <Tab label="Skills" />
      <Tab label="Work" />
      <Tab label="Projects" />
      <Tab label="Education" />
    </Tabs>
  );


  return (
    <div className={classes.base_nav}>
      <Paper className={classes.nav_paper}>
        <IconButton onClick={handleDrawerToggle} className={classes.menu_button}>
          <MenuIcon/>
        </IconButton>

        <div>
          <Hidden smUp implementation="css">
            <Drawer
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true,
              }}
            >
              <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                <CloseIcon/>
              </IconButton>
              {drawer}
            </Drawer>
          </Hidden>
        </div>

        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className={classes.nav_bar}
          centered
        >
          <Tab label="Top" />
          <Tab label="Skills" />
          <Tab label="Work" />
          <Tab label="Projects" />
          <Tab label="Education" />
        </Tabs>
      </Paper>

      <Paper className={classes.paper} elevation={0}>
        {list.map((item) => (
          <Paper key={item.id} ref={refs[item.id]} elevation={0} className={classes.img_item}>
            {item.template}
          </Paper>
        ))}
      </Paper>
      <Footer />
    </div>
  );
}