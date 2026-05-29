import React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Base from './page_base.jsx';

const theme = createTheme({
  palette: {
    primary: {
      main: '#235784',
    },
    secondary: {
      main: '#2f8f72',
    },
    text: {
      primary: '#172033',
      secondary: '#526070',
    },
    background: {
      default: '#eef4f8',
      paper: '#ffffff',
    },
  },
  shape: {
    borderRadius: 8,
  },
  typography: {
    fontFamily: ['Roboto', 'Arial', 'sans-serif'].join(','),
    h1: {
      letterSpacing: 0,
    },
    h2: {
      letterSpacing: 0,
    },
    h3: {
      letterSpacing: 0,
    },
    button: {
      letterSpacing: 0,
      textTransform: 'none',
    },
  },
  components: {
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          letterSpacing: 0,
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
  },
});

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Base />
    </ThemeProvider>
  </React.StrictMode>,
);
