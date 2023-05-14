import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Header from './header';
import navConfig from './nav/config';
import Footer from '../footer/footer';


const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 92;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: 'calc(100% - 64px)',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 70,
  // paddingBottom: theme.spacing(10),
  
}));

// ----------------------------------------------------------------------

export default function BeachDashboardLayout() {


  return (
    <StyledRoot>
      <Header data={navConfig} />
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  );
}
