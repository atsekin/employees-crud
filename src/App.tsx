import { QueryClient } from '@tanstack/react-query';
import { QueryClientProvider } from '@tanstack/react-query';

import './App.css';
import { Employees } from './components/Employees/Employees';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Employees />
    </QueryClientProvider>
  );
}

export default App
