import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DetailList, MediaTile, SectionCard, SectionTitle } from './section.jsx';

const workList = [
  {
    img: null,
    url: 'https://www.bhp.com/',
    title: 'BHP',
    role: 'Senior Software Developer (Contract)',
    date: 'June 2024 to February 2026',
    location: 'Perth, WA',
    description: [
      'Implemented a crusher health monitoring feature to track asset health status in near real time for a new mine site',
      'Built data ingestion pipelines to collect and process near real-time mine operation data from Pi Web API, FMS, downtime events, and stockpile systems',
      'Supported optimized truck sequencing and blending strategies through data-driven processing and operational insights',
      'Improved the live truck feature by adding ETA and truck status, giving controllers more timely visibility into live sequence changes',
      'Implemented automated reporting features for scheduled daily mine shift summaries and performance metrics',
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/ntt_data.png',
    url: 'https://www.nttdata.com/global/en/',
    title: 'NTT DATA',
    role: 'Front End Developer (Contractor)',
    date: 'May 2023 to August 2023',
    location: 'Perth, WA',
    description: [
      'Delivered Dash and Plotly prototypes aligned to product requirements, stakeholder workflows, and visual design expectations',
      'Integrated the latest prototype with an Azure SQL endpoint to support live data access and reporting use cases',
      'Designed a caching layer to improve responsiveness for heavy data-load scenarios',
      'Assessed gaps between the existing Power BI workflow and a customized Dash and Plotly application approach',
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/pointerra.png',
    url: 'https://www.pointerra.com/',
    title: 'Pointerra',
    role: 'Full Stack Developer',
    location: 'Perth, WA',
    date: 'June 2022 to December 2022',
    description: [
      'Built a one-button product walkthrough for marketing and onboarding, helping new users understand platform workflows faster',
      'Implemented Slack-based notification workflows to support cross-team operational visibility',
      "Supported migration, transformation, and deployment work across Pointerra's cloud-based SaaS applications",
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/atomorphis.jpg',
    url: 'https://www.idoba.com/',
    title: 'Atomorphis (now known as Idoba)',
    role: 'Software Developer',
    location: 'Perth, WA',
    date: 'November 2020 to June 2022',
    description: [
      'Contributed to the implementation of Gemini, supporting core product features through the delivery lifecycle',
      "Researched 2D and 3D tooling options and documented technical findings in the team's Jira Confluence knowledge base",
      'Worked across planning, implementation, testing, and release activities as part of the product lifecycle',
    ],
  },
  {
    img: 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/lianjia.jpg',
    url: 'https://sh.lianjia.com/',
    title: 'Lianjia',
    role: 'Software Developer',
    location: 'Shanghai, CHINA',
    date: 'January 2019 to September 2020',
    description: [
      'Helped maintain platform stability while participating in a three-month production on-call rotation',
      'Configured alerting for Celery error queue thresholds to improve operational response time',
      'Recognized for full attendance and outstanding first-year performance',
    ],
  },
];

const geminiUrl =
  'https://static1.squarespace.com/static/640eab33ae82eb7bd001b933/t/653f675c3db52712ca4ee98a/1698654049840/231030-Gemini-2page-Brochure.pdf';

export default function Work() {
  return (
    <SectionCard>
      <SectionTitle>Work</SectionTitle>

      <Stack spacing={{ xs: 2.25, md: 2.75 }}>
        {workList.map((item) => (
          <Box
            key={`${item.title}-${item.date}`}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '132px minmax(0, 1fr) minmax(300px, 1.25fr)' },
              gap: { xs: 2, md: 3 },
              alignItems: 'center',
              p: { xs: 2, md: 2.5 },
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: '#fbfcfe',
            }}
          >
            <MediaTile
              href={item.url}
              src={item.img}
              alt={`${item.title} logo`}
              fallbackLabel={item.title}
              fallbackColor={item.title === 'BHP' ? '#f37021' : undefined}
              fallbackFontSize={item.title === 'BHP' ? { xs: '2rem', sm: '2.35rem' } : undefined}
            />

            <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h6" component="h3" sx={{ fontWeight: 800, lineHeight: 1.25 }}>
                {item.title}
              </Typography>
              <Typography variant="subtitle1" color="primary.main" sx={{ mt: 0.5, fontWeight: 700 }}>
                {item.role}
              </Typography>
              <Typography variant="subtitle2" color="text.secondary" sx={{ mt: 0.25 }}>
                {item.location ? `${item.location} | ${item.date}` : item.date}
              </Typography>
            </Box>

            <DetailList
              items={item.description}
              renderItem={(description) =>
                description.includes('Gemini') ? <Link href={geminiUrl}>{description}</Link> : description
              }
            />
          </Box>
        ))}
      </Stack>
    </SectionCard>
  );
}
