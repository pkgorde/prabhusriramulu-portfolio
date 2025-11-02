import { Box, Container, Typography, Card, CardContent, Grid, Paper } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import GroupsIcon from '@mui/icons-material/Groups';
import WaveDivider from '../components/WaveDivider';
import Marquee from '../components/Marquee';

const OtherWorkSection = () => {
  const conferenceTalks = [
    {
      title: 'Building Products Users Love',
      event: 'ProductCon 2024',
      description: 'A deep dive into user-centered product development and how to build features that truly resonate with your audience.',
    },
    {
      title: 'The Future of Collaboration Tools',
      event: 'TechSummit 2023',
      description: 'Exploring emerging trends in workplace collaboration and what the next generation of productivity tools will look like.',
    },
  ];

  const personalProjects = [
    {
      title: 'Budget Tracker App',
      description: 'A simple, beautiful budgeting app built with React and Firebase.',
    },
    {
      title: 'Reading List Manager',
      description: 'Track your reading progress and discover new books based on your interests.',
    },
  ];

  return (
    <Box component="section" id="other-work" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h2" sx={{ mb: { xs: 8, md: 10 } }}>
          Here are some other things I've done that I'd like to share with you. 😁
        </Typography>

        {/* Conference Talks */}
        <Box sx={{ mb: { xs: 10, md: 16 } }}>
          <Marquee text="conference talks" className="mb-12" />

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {conferenceTalks.map((talk, index) => (
              <Card key={index} elevation={1}>
                <CardContent sx={{ p: { xs: 4, md: 6 } }}>
                  <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
                    <Grid item xs={12} md={4}>
                      <Paper
                        elevation={0}
                        sx={{
                          bgcolor: 'grey.200',
                          aspectRatio: '1/1',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          borderRadius: 2,
                        }}
                      >
                        <Box textAlign="center" color="grey.500">
                          <PersonIcon sx={{ fontSize: 64, mb: 1 }} />
                          <Typography variant="body2">Speaker Photo</Typography>
                        </Box>
                      </Paper>
                    </Grid>

                    <Grid item xs={12} md={8}>
                      <Typography variant="h4" gutterBottom>
                        {talk.title}
                      </Typography>
                      <Typography variant="h6" color="primary.main" gutterBottom>
                        {talk.event}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {talk.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

        {/* Panel Discussion */}
        <Box sx={{ mb: { xs: 10, md: 16 } }}>
          <Card elevation={1} sx={{ overflow: 'hidden' }}>
            <Box position="relative">
              <Paper
                elevation={0}
                sx={{
                  bgcolor: 'grey.200',
                  height: 300,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Box textAlign="center" color="grey.500">
                  <GroupsIcon sx={{ fontSize: 80, mb: 2 }} />
                  <Typography variant="h6">Panel Discussion Photo</Typography>
                </Box>
              </Paper>
              <Box
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: 'primary.main',
                  p: 3,
                }}
              >
                <Typography variant="h4" color="white">
                  Product Management in the AI Era
                </Typography>
              </Box>
            </Box>

            <CardContent sx={{ p: { xs: 4, md: 6 } }}>
              <Typography variant="body1" color="text.secondary">
                Joined a panel of industry leaders to discuss how AI is transforming
                the role of product managers and what skills will be essential in the coming years.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        {/* Personal Projects */}
        <Box>
          <Marquee text="personal projects" className="mb-12" />

          <Grid container spacing={4}>
            {personalProjects.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card elevation={1}>
                  <Paper
                    elevation={0}
                    sx={{
                      bgcolor: 'grey.200',
                      aspectRatio: '16/9',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Box textAlign="center" color="grey.500">
                      <PlayCircleOutlineIcon sx={{ fontSize: 80, mb: 2 }} />
                      <Typography variant="body2">Project Demo</Typography>
                    </Box>
                  </Paper>

                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography variant="h5" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box sx={{ mt: { xs: 8, md: 12 } }}>
        <WaveDivider color="white" />
      </Box>
    </Box>
  );
};

export default OtherWorkSection;
