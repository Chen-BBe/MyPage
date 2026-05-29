import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export function SectionCard({ children, sx }) {
  return (
    <Card
      elevation={0}
      sx={{
        border: '1px solid',
        borderColor: 'divider',
        boxShadow: '0 18px 50px rgba(31, 41, 55, 0.08)',
        overflow: 'hidden',
        ...sx,
      }}
    >
      <CardContent sx={{ p: { xs: 2.5, sm: 3, md: 4 } }}>{children}</CardContent>
    </Card>
  );
}

export function SectionTitle({ children }) {
  return (
    <Box sx={{ mb: { xs: 2.5, md: 3.5 } }}>
      <Typography
        variant="overline"
        component="h2"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1.25,
          color: 'primary.main',
          fontSize: '0.85rem',
          fontWeight: 800,
          lineHeight: 1.4,
          letterSpacing: 0,
        }}
      >
        <Box
          component="span"
          sx={{
            width: 28,
            height: 3,
            borderRadius: 99,
            bgcolor: 'secondary.main',
          }}
        />
        {children}
      </Typography>
    </Box>
  );
}

export function MediaTile({
  href,
  src,
  alt,
  fallbackLabel,
  fallbackColor,
  fallbackFontSize,
  fit = 'contain',
  dark = false,
}) {
  const [hasError, setHasError] = React.useState(false);

  return (
    <Link
      href={href}
      aria-label={alt}
      underline="none"
      sx={{
        display: 'block',
        width: { xs: 112, sm: 132 },
        mx: { xs: 'auto', md: 0 },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          placeItems: 'center',
          width: '100%',
          aspectRatio: '1 / 1',
          p: fit === 'contain' ? 1.5 : 0,
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          bgcolor: dark ? '#182433' : '#f7f9fc',
          boxShadow: '0 10px 26px rgba(31, 41, 55, 0.12)',
          transition: 'transform 160ms ease, box-shadow 160ms ease',
          '&:hover': {
            transform: 'translateY(-2px)',
            boxShadow: '0 16px 32px rgba(31, 41, 55, 0.16)',
          },
        }}
      >
        {src && !hasError ? (
          <Box
            component="img"
            src={src}
            alt={alt}
            onError={() => setHasError(true)}
            sx={{
              display: 'block',
              width: '100%',
              height: '100%',
              objectFit: fit,
              borderRadius: fit === 'cover' ? 1.5 : 0,
            }}
          />
        ) : (
          <Typography
            variant="h5"
            component="span"
            sx={{
              color: fallbackColor || (dark ? '#ffffff' : 'primary.main'),
              fontSize: fallbackFontSize,
              fontWeight: 900,
              textAlign: 'center',
            }}
          >
            {fallbackLabel || alt}
          </Typography>
        )}
      </Box>
    </Link>
  );
}

export function DetailList({ items, renderItem }) {
  return (
    <Box
      component="ul"
      sx={{
        m: 0,
        pl: { xs: 2.5, md: 3 },
        color: 'text.secondary',
      }}
    >
      {items.map((item) => (
        <Typography
          key={item}
          component="li"
          variant="body2"
          sx={{
            mb: 1,
            lineHeight: 1.7,
            '&::marker': {
              color: 'secondary.main',
            },
          }}
        >
          {renderItem ? renderItem(item) : item}
        </Typography>
      ))}
    </Box>
  );
}
