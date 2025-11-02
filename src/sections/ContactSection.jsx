import { Box, Container, Typography, Avatar, Link, Chip, Stack, Divider } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import EventIcon from '@mui/icons-material/Event';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import WaveDivider from '../components/WaveDivider';

const ContactSection = () => {
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com', icon: <LinkedInIcon /> },
    { name: 'Twitter', url: 'https://twitter.com', icon: <TwitterIcon /> },
    { name: 'GitHub', url: 'https://github.com', icon: <GitHubIcon /> },
  ];

  return (
    <Box component="section" id="contact" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.default' }}>
      <Container maxWidth="md">
        <Typography variant="h2" color="primary.main" gutterBottom sx={{ mb: 6 }}>
          Want to chat?
        </Typography>

        <Stack spacing={4} sx={{ mb: 8 }}>
          {/* Phone */}
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ bgcolor: 'primary.light', width: 56, height: 56 }}>
              <PhoneIcon />
            </Avatar>
            <Box>
              <Typography variant="caption" color="text.secondary" textTransform="uppercase" letterSpacing={1}>
                Phone
              </Typography>
              <Typography variant="h6" fontWeight={600}>
                (555) 123-4567
              </Typography>
            </Box>
          </Box>

          {/* Email */}
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ bgcolor: 'primary.light', width: 56, height: 56 }}>
              <EmailIcon />
            </Avatar>
            <Box>
              <Typography variant="caption" color="text.secondary" textTransform="uppercase" letterSpacing={1}>
                Email
              </Typography>
              <Link
                href="mailto:prabhu@example.com"
                underline="hover"
                color="text.primary"
                sx={{
                  display: 'block',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                prabhu@example.com
              </Link>
            </Box>
          </Box>

          {/* Calendar */}
          <Box display="flex" alignItems="center" gap={2}>
            <Avatar sx={{ bgcolor: 'primary.light', width: 56, height: 56 }}>
              <EventIcon />
            </Avatar>
            <Box>
              <Typography variant="caption" color="text.secondary" textTransform="uppercase" letterSpacing={1}>
                Schedule a Meeting
              </Typography>
              <Link
                href="https://calendly.com/yourname"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="text.primary"
                sx={{
                  display: 'block',
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  '&:hover': { color: 'primary.main' },
                }}
              >
                Book a time on my calendar
              </Link>
            </Box>
          </Box>
        </Stack>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 8 }}>
          I'd love to hear from you! Whether you want to discuss a project,
          share ideas, or just say hi. 👋
        </Typography>

        {/* Social Media */}
        <Box sx={{ pt: 6, borderTop: 1, borderColor: 'divider' }}>
          <Typography variant="h4" color="primary.main" gutterBottom sx={{ mb: 4 }}>
            We can also connect on social.
          </Typography>

          <Stack direction="row" spacing={2} flexWrap="wrap">
            {socialLinks.map((social, index) => (
              <Chip
                key={index}
                label={social.name}
                icon={social.icon}
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                clickable
                sx={{
                  px: 2,
                  py: 3,
                  fontSize: '1rem',
                  bgcolor: 'grey.100',
                  '&:hover': {
                    bgcolor: 'primary.main',
                    color: 'white',
                    '& .MuiChip-icon': {
                      color: 'white',
                    },
                  },
                  '& .MuiChip-icon': {
                    color: 'text.secondary',
                  },
                }}
              />
            ))}
          </Stack>
        </Box>
      </Container>

      <Box sx={{ mt: { xs: 8, md: 12 } }}>
        <WaveDivider color="#FFFEF9" />
      </Box>
    </Box>
  );
};

export default ContactSection;
