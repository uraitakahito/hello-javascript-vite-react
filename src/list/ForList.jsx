import React from 'react';
import PropTypes from 'prop-types';

function ForList({ src }) {
  return (
    <dl>
      {
        src.map((elem) => (
          <React.Fragment key={elem.isbn}>
            <dt>
              <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpeg`}>
                {elem.title} {elem.price}
              </a>
            </dt>
            <dd>
              {elem.summary}
            </dd>
          </React.Fragment>
        ))
      }
    </dl>
  );
}

ForList.propTypes = {
  src: PropTypes.arrayOf(PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
};

export default ForList;
