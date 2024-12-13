import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import StyledPanel from './StyledPanel';
import TitledPanel from './TitledPanel';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <StyledPanel>
      <p>a</p>
      <p>b</p>
    </StyledPanel>
    <TitledPanel>
      <p key="title">Title</p>
      <p key="body">Body</p>
    </TitledPanel>
  </StrictMode>,
);
