import { useState } from 'react';
import PropTypes from 'prop-types';
import ReRender2Child from './ReRender2Child';

function ReRender2() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={countUp} type="button">count up</button>
      <ReRender2Child count={0} />
    </>
  );
}

ReRender2.propTypes = {
  // eslint-disable-next-line react/no-unused-prop-types
  count: PropTypes.number.isRequired,
};

export default ReRender2;
