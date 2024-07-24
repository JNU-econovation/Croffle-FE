import './App.css';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet } from 'react-router-dom';
import theme from './style/theme';
import { Suspense } from 'react';
import { Loading } from './components/Loading';

const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={Loading} />
      <QueryClientProvider client={queryClient}>
        <Outlet />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
