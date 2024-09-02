import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './apis/reactQuery/queryClient.js';
import App from './App.jsx';
import './styles/global.css';
import LoadingSpinner from './components/common/loading/LoadingSpinner.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.Suspense fallback={<LoadingSpinner />}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.Suspense>,
);
