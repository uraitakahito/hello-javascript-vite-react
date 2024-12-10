import PropTypes from 'prop-types';

function ReRender2Child(props) {
  const { count } = props;
  console.log(`ReRenderChild text: ${count}`);

  return (
    <b>
      {count}
    </b>
  );
}

ReRender2Child.propTypes = {
  count: PropTypes.number.isRequired,
};

export default ReRender2Child;
