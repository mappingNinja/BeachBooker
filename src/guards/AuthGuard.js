import PropTypes from 'prop-types';
import { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function AuthGuard({ children }) {
    const { isAuthenticated, isInitialized,  } = useAuth();
    const { pathname } = useLocation();
    const [requestedLocation, setRequestedLocation] = useState(null);    
    //   if (!isInitialized) {
    //     return <LoadingScreen />;
    //   }        
    if (!window.localStorage.getItem('accessToken')) {
        if (pathname !== requestedLocation) {
          setRequestedLocation(pathname);
        }
        return <Navigate to={'/login'} />; 
      }
    
    if (requestedLocation && pathname !== requestedLocation) {        
        setRequestedLocation(null);
        return <Navigate to={requestedLocation} />;
    }

    return <>{children}</>;
}

AuthGuard.propTypes = {
    children: PropTypes.any,
};
