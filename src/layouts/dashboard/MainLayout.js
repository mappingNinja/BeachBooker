import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import navConfig from './nav/config';
import Footer from '../footer/footer';
import MainHeader from './main-header';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 80;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: 'calc(100% - 64px)',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 6,
  // paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    // paddingTop: APP_BAR_DESKTOP + 25,
    //paddingLeft: theme.spacing(2),
    //paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (<>
    <StyledRoot>
      <MainHeader onOpenNav={() => setOpen(true)} data={navConfig} />
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
    <Footer layout="dashboard" />
  </>
  );
}
