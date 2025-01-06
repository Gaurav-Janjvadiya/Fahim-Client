import { Outlet, useLocation } from 'react-router-dom';
import { Header, Footer } from './layout';
import { Provider } from 'react-redux';
import store from './redux/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {
  const location = useLocation(); 
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {location.pathname !== '/terms' && <Header />}
        <Outlet />
        {location.pathname !== '/terms' && <Footer />}
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
