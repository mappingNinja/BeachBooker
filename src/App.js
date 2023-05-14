import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Router from './routes';
import ThemeProvider from './theme';
import ScrollToTop from './components/scroll-to-top';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';

export default function App() {

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />          
            <Router />          
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
