import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import PropTypes from 'prop-types';
// A simple hook to check if the user is authenticated
const useAuth = () => {
  // Replace with actual logic to check authentication (e.g., checking a token or session)
  return Cookies.get('jwt') ? true : false;
};

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth();

  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
