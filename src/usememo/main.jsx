import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import AppUseMemo from './AppUseMemo';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
    <AppUseMemo />
  </StrictMode>,
);
