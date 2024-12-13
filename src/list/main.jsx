import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ForList from './ForList';
import books from '../books';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <ForList src={books} />
  </StrictMode>,
);
