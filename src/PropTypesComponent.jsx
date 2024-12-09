import PropTypes from 'prop-types';

function PropTypesComponent({ name }) {
  return (
    <h2>
      Hello, {name}!
    </h2>
  );
}

PropTypesComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PropTypesComponent;
