import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StateForm from './StateForm';
import UncontrolledComponent from './UncontrolledComponent';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <StateForm />
    <UncontrolledComponent />
  </StrictMode>,
);
