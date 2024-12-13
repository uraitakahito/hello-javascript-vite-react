import { createRoot } from 'react-dom/client';
import books from '../books';
import ListTemplate from './ListTemplate';

const root = createRoot(document.getElementById('root'));
root.render(
  <ListTemplate
    src={books}
    render={(elem) => (
      <>
        <dt>
          <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
            {elem.title}
          </a>
        </dt>
        <dd>{elem.summary}</dd>
      </>
    )}
  />,
);
