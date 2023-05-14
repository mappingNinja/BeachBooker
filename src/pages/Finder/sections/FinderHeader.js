import PropTypes from 'prop-types';
import { Box, AppBar, Toolbar, Typography, Button } from '@mui/material';
import FinderSearchBar from './FinderSearchBar';

export default function FinderHeader() {
  return (
    <AppBar
      position="static"
      sx={{
        background: '#fff',
        height: '76px',
        padding: '5px',
        boxShadow: '0 25px 50px -12px rgba(0,0,0,.5)!important',
        fontFamily: ['TT Norms Pro Regular', 'Helvetica', 'sans-serif'].join(','),
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            pl: 5,
            fontFamily: 'monospace',
            fontWeight: 300,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          <Box component="img" alt="logo" src="/assets/logo-primary.svg" />
        </Typography>
        <FinderSearchBar />
        <Button variant="text" size="large" sx={{ pr: 5 }}>
          Espace Pro
        </Button>
      </Toolbar>
    </AppBar>
  );
}

FinderHeader.propTypes = {
  onOpenNav: PropTypes.func,
};
