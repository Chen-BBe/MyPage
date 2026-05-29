import React from 'react';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

const resumeUrl = 'https://github.com/Chen-BBe/my-page-assets/raw/main/Steven-Bi.pdf';

export default function FootBar() {
  return (
    <Button
      href={resumeUrl}
      target="_blank"
      rel="noreferrer"
      variant="contained"
      color="primary"
      startIcon={<DownloadIcon />}
      fullWidth
      sx={{
        py: 1.35,
        borderRadius: 2,
        fontWeight: 800,
        boxShadow: '0 12px 28px rgba(35, 87, 132, 0.22)',
      }}
    >
      Download resume
    </Button>
  );
}
