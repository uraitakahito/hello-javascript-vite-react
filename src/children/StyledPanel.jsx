import React from 'react';
import PropTypes from 'prop-types';

function StyledPanel({ children }) {
  return (
    <div>
      {children}
    </div>
  );
}

StyledPanel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyledPanel;
