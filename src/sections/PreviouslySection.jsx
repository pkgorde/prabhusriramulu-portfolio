import { Box, Container, Typography, Card, CardContent, Grid, Paper, Chip } from '@mui/material';
import BarChartIcon from '@mui/icons-material/BarChart';
import WaveDivider from '../components/WaveDivider';

const PreviouslySection = () => {
  const previousCompanies = [
    { name: 'Microsoft', logo: 'MS' },
    { name: 'Braze', logo: 'BR' },
    { name: 'Salesforce', logo: 'SF' },
    { name: 'Amazon', logo: 'AM' },
    { name: 'Google', logo: 'GO' },
    { name: 'Meta', logo: 'ME' },
  ];

  return (
    <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Previously at Company */}
        <Box sx={{ mb: { xs: 10, md: 16 } }}>
          <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
            Previously...
          </Typography>

          <Card
            elevation={0}
            sx={{
              background: 'linear-gradient(135deg, rgba(0, 166, 126, 0.1) 0%, rgba(0, 166, 126, 0.05) 100%)',
              p: { xs: 4, md: 6 },
            }}
          >
            <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
              {/* Company Logo */}
              <Grid item xs={12} md={5}>
                <Box display="flex" justifyContent="center">
                  <Paper
                    elevation={3}
                    sx={{
                      width: 200,
                      height: 200,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 3,
                    }}
                  >
                    <Box textAlign="center">
                      <Typography variant="h1" color="primary.main" sx={{ mb: 1 }}>
                        MS
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Microsoft
                      </Typography>
                    </Box>
                  </Paper>
                </Box>
              </Grid>

              {/* Achievement Details */}
              <Grid item xs={12} md={7}>
                <Typography variant="h3" gutterBottom>
                  Led product development for Teams collaboration features
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                  Spearheaded the development of new collaboration tools that improved
                  team productivity and user engagement across the platform.
                </Typography>

                {/* Key Metric */}
                <Card elevation={1} sx={{ p: 3, mb: 3 }}>
                  <Box display="flex" alignItems="center" gap={2}>
                    <Typography variant="h3" color="primary.main">
                      $1.2M
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      pipeline growth in first quarter
                    </Typography>
                  </Box>
                </Card>

                {/* Diagram/Visual Placeholder */}
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: 'grey.200',
                    height: 200,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 2,
                  }}
                >
                  <Box textAlign="center" color="grey.500">
                    <BarChartIcon sx={{ fontSize: 64, mb: 1 }} />
                    <Typography variant="body2">Impact Visualization</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Card>
        </Box>

        {/* Software Engineering Experience */}
        <Box>
          <Typography variant="h2" gutterBottom sx={{ mb: 6 }}>
            Software Engineering Experience
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }}>
            {previousCompanies.map((company, index) => (
              <Grid item xs={6} md={4} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    bgcolor: 'grey.100',
                    p: 4,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: 160,
                    borderRadius: 2,
                    transition: 'background-color 0.3s',
                    '&:hover': {
                      bgcolor: 'grey.200',
                    },
                  }}
                >
                  <Box textAlign="center">
                    <Typography variant="h4" color="text.secondary" gutterBottom>
                      {company.logo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {company.name}
                    </Typography>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box sx={{ mt: { xs: 8, md: 12 } }}>
        <WaveDivider color="#FFFEF9" />
      </Box>
    </Box>
  );
};

export default PreviouslySection;
