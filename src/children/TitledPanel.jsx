import React from 'react';
import PropTypes from 'prop-types';

function TitledPanel({ children }) {
  const title = children.find((elem) => elem.key === 'title');
  const body = children.filter((elem) => elem.key === 'body');

  return (
    <div>
      {title}
      {body}
    </div>
  );
}

TitledPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TitledPanel;
