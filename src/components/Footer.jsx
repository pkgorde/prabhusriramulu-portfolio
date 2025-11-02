import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: { xs: 4, md: 6 } }}>
      <Container maxWidth="lg">
        <Box textAlign="center">
          <Typography variant="body1">
            <Box component="span" fontWeight={700} color="text.primary">
              prabhu sriramulu
            </Box>
            {' | '}
            <Box component="span" fontWeight={600} color="primary.main">
              product manager
            </Box>
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
            © {new Date().getFullYear()} All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
