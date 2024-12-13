import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReRender from './ReRender';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ReRender />
  </StrictMode>,
);
