/* eslint-disable consistent-return */
import { useRoutes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/dashboard/MainLayout';
import ContactPage from './pages/Contact';
import PartnerSignupPage from './pages/PartnerSignup';
import PartnerPage from './pages/Partner';
import PlaceDetailsPage from './pages/Place';
import BookingPage from './pages/Booking';
import FinderPage from './pages/Finder';
import Footer from './layouts/footer/footer';


export default function Router(props) {

  const routes = useRoutes([
    // {
    //   path: 'login',
    //   element: <GuestGuard><LoginPage /></GuestGuard>,
    // },
    {
      path: '/',
      element: (<MainLayout />),
      children: [
        { path: '', element: <HomePage /> },
        { path: 'contact', element: <ContactPage /> },
        { path: 'partner', element: <PartnerPage /> },
        { path: 'place/:id', element: <PlaceDetailsPage /> },        
        { path: 'partner/signup', element: <PartnerSignupPage /> },
      ],
    },
    {
      path: 'place/:id/book', element: <><BookingPage /><Footer /></>
    },
    {
      path: 'finder', element: <FinderPage />
    }
  ]);

  return routes;
}
