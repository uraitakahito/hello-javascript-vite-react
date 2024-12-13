import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StateForm from './StateForm';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <StateForm />
  </StrictMode>,
);
