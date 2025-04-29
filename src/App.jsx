import { Outlet, useLocation } from 'react-router-dom';
import { Header, Footer } from './layout';

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== '/terms' && <Header />}
      <Outlet />
      {location.pathname !== '/terms' && <Footer />}
    </>
  );
}

export default App;
