import PropTypes from 'prop-types';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';

export default function MainHeader() {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: '#fff',
        height: '76px',
        padding: 0.5,
        boxShadow: '0 25px 50px -12px rgba(0,0,0,.5)!important',
        zIndex: '10',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            mt: 1.5,
            px: 4,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <Box component="img" alt="logo" src="/assets/logo-primary.svg" />
        </Typography>
        <Typography sx={{ flexGrow: 1, color: '#000' }} variant="h4">
          &nbsp;
        </Typography>
        <Button
          variant="text"
          size="large"
          sx={{ px: 7 }}
          onClick={() => window.open('https://pro.beachbooker.fr/login', '_blank')}
        >
          Espace Pro
        </Button>
      </Toolbar>
    </AppBar>
  );
}

MainHeader.propTypes = {
  onOpenNav: PropTypes.func,
};
