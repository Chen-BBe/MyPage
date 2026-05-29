import React from 'react';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import { SectionCard, SectionTitle } from './section.jsx';

const skills = [
  'Frontend engineering: HTML, CSS, JavaScript, TypeScript',
  'Backend development: Node.js, Python',
  'Modern UI frameworks: React, Vue',
  'API platforms: Flask, Django, FastAPI',
  'Geospatial visualization: Deck.gl, Mapbox',
  'REST API design and integration',
  'Serverless application development',
  'Event-driven and messaging systems',
  'Data-driven system development',
  'Relational and NoSQL database systems',
  'Delivery tools: Jira, GitLab, Azure DevOps',
  'Cloud and DevOps: Git, Docker, Terraform, AWS, Azure',
];

export default function Skills() {
  return (
    <SectionCard>
      <SectionTitle>Skills</SectionTitle>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' },
          gap: 1.25,
        }}
      >
        {skills.map((skill) => (
          <Chip
            key={skill}
            label={skill}
            variant="outlined"
            sx={{
              justifyContent: 'flex-start',
              minHeight: 40,
              px: 0.75,
              borderColor: 'rgba(35, 87, 132, 0.18)',
              bgcolor: '#f8fafc',
              color: 'text.primary',
              fontWeight: 700,
              '& .MuiChip-label': {
                whiteSpace: 'normal',
                py: 0.75,
              },
            }}
          />
        ))}
      </Box>
    </SectionCard>
  );
}
