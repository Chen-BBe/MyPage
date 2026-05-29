import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import { DetailList, MediaTile, SectionCard, SectionTitle } from './section.jsx';

const projectList = [
  {
    img: 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/fancy_truck.jpg',
    title: 'Map-based web app - simulated vehicle navigation',
    sub: 'Live demo - version updated in 2023',
    url: 'https://fancy-truck-086105e58a82.herokuapp.com/',
    description: [
      'Google Maps interactions',
      'Deck.gl data layers',
      'JavaScript',
      'GCP API usage monitoring',
      '3D model asset loading',
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/bootbw.png',
    title: 'Business website sample',
    sub: 'Live demo - version updated in 2020',
    url: 'https://boot-bw.herokuapp.com/',
    description: [
      'Django',
      'Python & JavaScript',
      'Responsive mobile design',
      'Common features for business users',
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/visual_stock.png',
    title: 'Simple stock-data dashboard',
    sub: 'Live demo - version updated in 2017',
    url: 'https://visual-stock.herokuapp.com/',
    description: [
      'Django',
      'Python & JavaScript',
      'Third-party service integration'
    ],
  },
];

export default function Projects() {
  return (
    <SectionCard>
      <SectionTitle>Projects</SectionTitle>

      <Stack spacing={{ xs: 2.25, md: 2.75 }}>
        {projectList.map((item) => (
          <Box
            key={item.title}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '132px minmax(0, 1fr) minmax(260px, 1fr)' },
              gap: { xs: 2, md: 3 },
              alignItems: 'center',
              p: { xs: 2, md: 2.5 },
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: '#fbfcfe',
            }}
          >
            <MediaTile href={item.url} src={item.img} alt={`${item.title} screenshot`} fit="cover" dark />

            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 800, lineHeight: 1.25 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mt: 0.75, mb: 1.5 }}>
                {item.sub}
              </Typography>
              <Button
                href={item.url}
                size="small"
                variant="outlined"
                endIcon={<LaunchRoundedIcon />}
                sx={{ px: 1.5 }}
              >
                Open demo
              </Button>
            </Box>

            <DetailList items={item.description} />
          </Box>
        ))}
      </Stack>
    </SectionCard>
  );
}
