import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Top from './top.jsx';
import Skills from './skills.jsx';
import Work from './work.jsx';
import Projects from './projects.jsx';
import Education from './education.jsx';
import Footer from './page_footer.jsx';

const sections = [
  { label: 'Top', Component: Top },
  { label: 'Skills', Component: Skills },
  { label: 'Work', Component: Work },
  { label: 'Projects', Component: Projects },
  { label: 'Education', Component: Education },
];

const buildDate = new Intl.DateTimeFormat('en-AU', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'Australia/Perth',
}).format(new Date(import.meta.env.VITE_BUILD_TIME));

export default function HeadBar() {
  const [value, setValue] = React.useState(0);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const refs = React.useRef(sections.map(() => React.createRef()));

  const scrollToSection = (index) => {
    setValue(index);
    refs.current[index].current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    setMobileOpen(false);
  };

  const handleChange = (event, newValue) => {
    scrollToSection(newValue);
  };

  const navTabs = (
    <Tabs
      value={value}
      onChange={handleChange}
      orientation={mobileOpen ? 'vertical' : 'horizontal'}
      indicatorColor="secondary"
      textColor="inherit"
      centered={!mobileOpen}
      sx={mobileOpen ? { width: 180, mt: 1 } : { minHeight: 56 }}
    >
      {sections.map((section) => (
        <Tab key={section.label} label={section.label} />
      ))}
    </Tabs>
  );

  return (
    <>
      <Box
        sx={{
          px: 2,
          py: 0.75,
          bgcolor: '#172033',
          color: '#eef4f8',
          textAlign: 'center',
          fontSize: '0.78rem',
          fontWeight: 700,
        }}
      >
        Last updated: {buildDate} AWST
      </Box>

      <AppBar
        position="sticky"
        elevation={1}
        sx={{
          bgcolor: 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(14px)',
          color: 'text.primary',
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}
      >
        <Toolbar sx={{ justifyContent: 'center', minHeight: { xs: 58, md: 66 } }}>
          <IconButton
            aria-label="Open navigation"
            onClick={() => setMobileOpen(true)}
            sx={{ display: { xs: 'inline-flex', md: 'none' }, position: 'absolute', left: 8 }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="subtitle1"
            component="div"
            sx={{
              display: { xs: 'block', md: 'none' },
              fontWeight: 700,
            }}
          >
            Steven Bi
          </Typography>

          <Box sx={{ display: { xs: 'none', md: 'block' } }}>{navTabs}</Box>
        </Toolbar>
      </AppBar>

      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        PaperProps={{
          sx: {
            width: 220,
            bgcolor: 'background.paper',
          },
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton aria-label="Close navigation" onClick={() => setMobileOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        {navTabs}
      </Drawer>

      <Container maxWidth="lg" component="main" sx={{ px: { xs: 1.75, sm: 3 }, py: { xs: 2, md: 4.5 } }}>
        {sections.map(({ label, Component }, index) => (
          <Box
            key={label}
            ref={refs.current[index]}
            sx={{
              scrollMarginTop: { xs: 72, md: 84 },
              mb: { xs: 2.5, md: 3.5 },
            }}
          >
            <Component />
          </Box>
        ))}
        <Footer />
      </Container>
    </>
  );
}
