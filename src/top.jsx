import React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import { SectionCard } from './section.jsx';

const profileImage = 'https://raw.githubusercontent.com/Chen-BBe/my-page-assets/main/img/big_head.jpg';

const contactItems = [
  { icon: <LocationOnRoundedIcon />, label: 'Perth WA, Australia', color: '#2f8f72' },
  { icon: <GitHubIcon />, label: 'GitHub', href: 'https://github.com/Chen-BBe/', color: '#172033' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/steven-bi-786728a8/', color: '#0a66c2' },
  { icon: <EmailRoundedIcon />, label: 'steven.bb.0221@gmail.com', href: 'mailto:steven.bb.0221@gmail.com', color: '#8a4f12' },
];

export default function Top() {
  return (
    <SectionCard>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '300px 1fr' },
          gap: { xs: 3, md: 4 },
          placeItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Avatar
            src={profileImage}
            alt="Steven Bi"
            variant="rounded"
            sx={{
              width: { xs: 190, sm: 230, md: 280 },
              height: { xs: 248, sm: 300, md: 360 },
              borderRadius: 2,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 20px 45px rgba(31, 41, 55, 0.18)',
            }}
          />
        </Box>

        <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontSize: { xs: '2.25rem', sm: '2.75rem', md: '3.25rem' },
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            STEVEN BI
          </Typography>
          <Typography
            variant="h6"
            component="p"
            color="primary.main"
            sx={{ mt: 1, mb: 2.5, fontWeight: 700 }}
          >
            FULL-STACK DEVELOPER
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 720, lineHeight: 1.8 }}>
            Experienced Full Stack Developer with a strong record of delivering production web
            applications, data-driven interfaces, and cloud-connected services. I bring hands-on
            expertise across frontend engineering, backend APIs, geospatial visualization, and
            deployment workflows, with a current focus on applying AI tools and patterns to practical
            software delivery.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'minmax(0, 1fr)',
                xl: 'repeat(4, max-content)',
              },
              justifyContent: { xs: 'center', xl: 'start' },
              justifyItems: 'center',
              placeItems: 'center',
              columnGap: { xs: 2, sm: 2.5, md: 3 },
              rowGap: { xs: 1.75, sm: 2, md: 2.25 },
              my: 1.5,
            }}
          >
            {contactItems.map((item) => {
              const content = (
                <Stack
                  direction="row"
                  spacing={1}
                  sx={{
                    display: 'inline-flex',
                    width: { xs: '100%', xl: 'auto' },
                    maxWidth: '100%',
                    justifyContent: 'center',
                    minHeight: 44,
                    px: 1.75,
                    py: 1,
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 99,
                    bgcolor: 'rgba(248, 250, 252, 0.85)',
                    color: 'text.primary',
                    boxShadow: '0 6px 16px rgba(31, 41, 55, 0.06)',
                    transition: 'border-color 160ms ease, transform 160ms ease, background 160ms ease',
                    '&:hover': item.href
                      ? {
                          borderColor: item.color,
                          bgcolor: 'background.paper',
                          transform: 'translateY(-1px)',
                        }
                      : undefined,
                  }}
                >
                  <Box sx={{ display: 'flex', color: item.color, '& svg': { fontSize: 20 } }}>
                    {item.icon}
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 700, lineHeight: 1.35, wordBreak: 'break-word' }}>
                    {item.label}
                  </Typography>
                </Stack>
              );

              return item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  color="inherit"
                  underline="none"
                  sx={{ width: { xs: '100%', xl: 'auto' }, maxWidth: '100%' }}
                >
                  {content}
                </Link>
              ) : (
                <Box key={item.label} sx={{ width: { xs: '100%', xl: 'auto' }, maxWidth: '100%' }}>
                  {content}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </SectionCard>
  );
}
