import { useDispatch } from 'react-redux';
import { logout } from '../redux/store';
import { Button } from './';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };
  return <Button onClick={handleLogout}>Logout</Button>;
}

export default Logout;
