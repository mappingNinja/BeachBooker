import PropTypes from 'prop-types';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function GuestGuard({ children }) {
  const { isAuthenticated } = useAuth();
  const { pathname } = useLocation();
  if (isAuthenticated) {
    return <Navigate to={'/welcome'} />;
  }

  return <>{children}</>;
}

GuestGuard.propTypes = {
    children: PropTypes.any,
};
