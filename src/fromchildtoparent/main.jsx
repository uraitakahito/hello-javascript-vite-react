import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StateParent from './StateParent';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <StateParent />
  </StrictMode>,
);
