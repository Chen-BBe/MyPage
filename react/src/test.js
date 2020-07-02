import React from 'react';
import { makeStyles, createMuiTheme} from '@material-ui/core/styles';
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



const theme = createMuiTheme({
  breakpoints: {
    values: {
      sm: 1280,
    },
  },
});


const useStyles = makeStyles(theme => ({
  base_nav: {
    marginBottom: '1vh',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center', 
    width: '65%',
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
}));


export default function HeadBar() {
  const classes = useStyles();
  const [value, setValue] = React.useState();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const list = [
    {'id': '0', 'template': <Top />},
    {'id': '1', 'template': <Skills />},
    {'id': '2', 'template': <Work />},
    {'id': '3', 'template': <Projects />},
    {'id': '4', 'template': <Education />},
  ];
  const refs = list.reduce((acc, value) => {
    acc[value.id] = React.createRef();
    return acc;
  }, {});

  const handleChange = (event, index) => {
    setValue(index);
    refs[index].current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const handleToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className={classes.base_nav}>
      <Paper className={classes.nav_paper}>
        <IconButton onClick={handleToggle} className={classes.menu_button}>
          <MenuIcon/>
        </IconButton>
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
        {list.map(item => (
          <Paper key={item.id} ref={refs[item.id]} elevation={0} className={classes.img_item}>
            {item.template}
          </Paper>
        ))}
      </Paper>
      <Footer />
    </div>
  );
}