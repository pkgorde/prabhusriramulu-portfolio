import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import WaveDivider from '../components/WaveDivider';

const HeroSection = () => {
  const ImagePlaceholder = ({ label, height = 300 }) => (
    <Paper
      elevation={0}
      sx={{
        height,
        bgcolor: 'grey.200',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
      }}
    >
      <Box textAlign="center" color="grey.500">
        <ImageIcon sx={{ fontSize: { xs: 48, md: 64 }, mb: 1 }} />
        <Typography variant="body2">{label}</Typography>
      </Box>
    </Paper>
  );

  return (
    <Box component="section" id="about" sx={{ py: { xs: 12, md: 16 } }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="flex-start">
          {/* Left Column - Text Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              <Typography variant="h1">
                Hey! I'm Prabhu. 👋
              </Typography>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Typography variant="body1" color="text.secondary">
                  I'm a <Box component="span" fontWeight={700} color="text.primary">Product Manager by day</Box>,
                  creative enthusiast by night.
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  Currently based in <Box component="span" fontWeight={700}>San Francisco Bay Area</Box>,
                  I spend my time building products that help teams work better together,
                  experimenting with new technologies, and finding ways to make complex things simple.
                </Typography>

                <Typography variant="body1" color="text.secondary">
                  When I'm not deep in product specs or user research, you can find me:
                </Typography>

                <Box component="ul" sx={{ pl: 3, m: 0 }}>
                  <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    🎨 Working on mosaic art projects
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    🚀 Tinkering with side projects
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    📚 Reading about design and technology
                  </Typography>
                  <Typography component="li" variant="body1" color="text.secondary" sx={{ mb: 1 }}>
                    🐱 Hanging out with my cat
                  </Typography>
                </Box>

                <Typography variant="body1" color="text.secondary" sx={{ pt: 2 }}>
                  I'm passionate about{' '}
                  <Box component="span" color="primary.main" fontWeight={700}>
                    creating products that make a real difference
                  </Box>{' '}
                  in people's lives. Whether it's through better UX, smarter features, or just making someone's day a little easier.
                </Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column - Image Grid */}
          <Grid item xs={12} md={6}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ImagePlaceholder label="Professional Photo" height={400} />
              </Grid>
              <Grid item xs={6}>
                <ImagePlaceholder label="Mosaic Art" height={180} />
              </Grid>
              <Grid item xs={6}>
                <ImagePlaceholder label="Cat Photo" height={180} />
              </Grid>
              <Grid item xs={12}>
                <ImagePlaceholder label="Personal Project" height={200} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ mt: { xs: 8, md: 12 } }}>
        <WaveDivider />
      </Box>
    </Box>
  );
};

export default HeroSection;
