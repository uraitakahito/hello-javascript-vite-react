import PropTypes from 'prop-types';

export default function StateCounter({ step, onUpdate }) {
  const handleClick = () => onUpdate(step);
  return (
    <button onClick={handleClick} type="button">
      <span>{step}</span>
    </button>
  );
}

StateCounter.propTypes = {
  step: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
