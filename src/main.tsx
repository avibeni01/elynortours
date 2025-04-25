import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import HomePage from './components/HomePage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HomePage />
  </StrictMode>
);
