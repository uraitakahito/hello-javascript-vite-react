import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Ignore from './Ignore';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Ignore />
  </StrictMode>,
);
