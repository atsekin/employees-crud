import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material';

import { appTheme } from './theme/appTheme';
import './App.css';
import { Layout } from './components/Layout/Layout';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={appTheme}>
        <Layout />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App
