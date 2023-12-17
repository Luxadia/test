import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';



function Layout() {
  const pages = [
    { name: "Projecten", link: '/projecten' },
    { name: "Herinneringen", link: '/herinneringen' },
    { name: "Aankopen", link: '/aankopen' },
  ];
  return (
    <AppBar position="static" sx={{ bgcolor: 'white', borderBottom: "1px solid #cfd8dc", color: 'text.primary', mb: 2 }} elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters variant='dense'>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              color: "text.primary",
              textDecoration: 'none',
            }}
          >
            Innova
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Link to={page.link}>
                <Button
                  key={page.name}
                  sx={{ color: 'text.primary', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Layout;