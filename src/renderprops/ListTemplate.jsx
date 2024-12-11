import React from 'react';
import PropTypes from 'prop-types';

function ListTemplate({ src, render }) {
  return (
    <dl>
      {src.map((elem) => (
        <React.Fragment key={elem.isbn}>
          {render(elem)}
        </React.Fragment>
      ))}
    </dl>
  );
}

ListTemplate.propTypes = {
  src: PropTypes.arrayOf(PropTypes.shape({
    isbn: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
  })).isRequired,
  render: PropTypes.func.isRequired,
};

export default ListTemplate;
