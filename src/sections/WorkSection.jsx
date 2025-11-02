import { Box, Container, Typography, Card, CardContent, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ImageIcon from '@mui/icons-material/Image';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import WaveDivider from '../components/WaveDivider';

const WorkSection = () => {
  return (
    <Box component="section" id="work" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 }, maxWidth: '900px' }}>
          Check out what I've been working on in my current role at{' '}
          <Box component="span" color="primary.main">TechCo</Box>.
        </Typography>

        {/* Current Project Showcase */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: 8, md: 12 } }}>
          {/* Main Product Card */}
          <Card elevation={1}>
            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography variant="h3" gutterBottom>
                Product Name: Analytics Dashboard
              </Typography>

              {/* Video/Image Placeholder */}
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'grey.200',
                  height: 400,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  mb: 4,
                }}
              >
                <Box textAlign="center" color="grey.500">
                  <PlayCircleOutlineIcon sx={{ fontSize: 80, mb: 2 }} />
                  <Typography variant="h6">Product Demo Video</Typography>
                </Box>
              </Paper>

              <Typography variant="body1" color="text.secondary">
                A comprehensive analytics dashboard that helps teams make data-driven decisions.
                Built from the ground up to handle millions of data points while maintaining
                a smooth, intuitive user experience.
              </Typography>
            </CardContent>
          </Card>

          {/* Feature Highlight */}
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} md={6}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'grey.200',
                  height: 350,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                }}
              >
                <Box textAlign="center" color="grey.500">
                  <ImageIcon sx={{ fontSize: 80, mb: 2 }} />
                  <Typography variant="h6">Feature Screenshot</Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h3" color="primary.main" gutterBottom>
                Real-Time Collaboration
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
                Enabled teams to work together seamlessly with live updates and shared dashboards.
                This feature reduced reporting time by 60% and improved cross-functional alignment.
              </Typography>
              <List disablePadding>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color="text.secondary">
                        <Box component="span" fontWeight={700}>60%</Box> reduction in reporting time
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disablePadding sx={{ mb: 1.5 }}>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color="text.secondary">
                        <Box component="span" fontWeight={700}>10,000+</Box> active users
                      </Typography>
                    }
                  />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ minWidth: 32 }}>
                    <FiberManualRecordIcon sx={{ fontSize: 8, color: 'primary.main' }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Typography variant="body1" color="text.secondary">
                        <Box component="span" fontWeight={700}>95%</Box> user satisfaction rate
                      </Typography>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Box sx={{ mt: { xs: 8, md: 12 } }}>
        <WaveDivider color="white" />
      </Box>
    </Box>
  );
};

export default WorkSection;
