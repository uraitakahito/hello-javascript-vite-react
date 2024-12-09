import PropTypes from 'prop-types';

function PropTypesComponent({ name }) {
  return (
    <div>
      Hello, {name}!
    </div>
  );
}

PropTypesComponent.propTypes = {
  name: PropTypes.string.isRequired,
};

export default PropTypesComponent;
