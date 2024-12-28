import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

// Function to get user ID from JWT token stored in cookies
const getUserIdFromToken = () => {
  const token = Cookies.get('jwt'); // Replace 'token' with your cookie name
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.id; // Replace 'id' with the actual key in the decoded token
    } catch (error) {
      console.error('Error decoding JWT token:', error);
      return null;
    }
  } else {
    console.log('Token not found');
    return null;
  }
};

export default getUserIdFromToken;
