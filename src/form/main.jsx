import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StateForm from './StateForm';
import UncontrolledComponent from './UncontrolledComponent';
import StateNest from './StateNest';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <StateForm />
    <UncontrolledComponent />
    <StateNest />
  </StrictMode>,
);
