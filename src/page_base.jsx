import React from 'react';
import Box from '@mui/material/Box';
import Nav from './page_nav.jsx';

export default function Base() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #eef4f8 0%, #f8fafc 48%, #eef4f8 100%)',
      }}
    >
      <Nav />
    </Box>
  );
}
