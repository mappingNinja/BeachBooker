import PropTypes from 'prop-types';
import { NavLink as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, ListItemText } from '@mui/material';
import { bgBlur } from '../../../utils/cssStyles';
import Searchbar from './Searchbar';
import AccountPopover from './AccountPopover';
import { StyledNavItem } from '../../../components/nav-section/styles';

// ----------------------------------------------------------------------

const NAV_WIDTH = 0;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 60;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  background: '#fff',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  borderBottom: '2px solid #000',
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

Header.propTypes = {
  onOpenNav: PropTypes.func,
};

export default function Header({ data, withMenu = true }) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{
            xs: 0.5,
            sm: 1,
          }}
        >
          <AccountPopover />
        </Stack>
      </StyledToolbar>
      {withMenu && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'space-between',
            pt: 2,
            pb: 2,
            color: '#000',
          }}
        >
          {data.map((item) => (
            <NavItem key={item.title} item={item} />
          ))}
        </Box>
      )}
    </StyledRoot>
  );
}

function NavItem({ item }) {
  const { title, path } = item;

  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        fontSize:"1rem",
        fontWeight: 700,
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',          
        },
      }}
    >
      <ListItemText textAlign="center" disableTypography primary={title} />
    </StyledNavItem>
  );
}
