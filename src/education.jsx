import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MediaTile, SectionCard, SectionTitle } from './section.jsx';

const educationList = [
  {
    img: 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/curtin.png',
    title: 'Curtin University',
    url: 'https://www.curtin.edu.au/',
    role: 'Bachelor of Science, Software Engineering',
    date: 'August 2014 to December 2018',
  },
];

export default function Education() {
  return (
    <SectionCard>
      <SectionTitle>Education</SectionTitle>

      {educationList.map((item) => (
        <Box
          key={item.title}
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '132px 1fr' },
            gap: { xs: 2, md: 3 },
            alignItems: 'center',
            p: { xs: 2, md: 2.5 },
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: '#fbfcfe',
          }}
        >
          <MediaTile href={item.url} src={item.img} alt={`${item.title} logo`} dark />

          <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h6" component="h3" sx={{ fontWeight: 800, lineHeight: 1.25 }}>
              {item.title}
            </Typography>
            <Typography variant="subtitle1" color="primary.main" sx={{ mt: 0.5, fontWeight: 700 }}>
              {item.role}
            </Typography>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.25 }}>
              {item.date}
            </Typography>
          </Box>
        </Box>
      ))}
    </SectionCard>
  );
}
