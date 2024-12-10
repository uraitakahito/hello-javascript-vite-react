import { useState } from 'react';
import ReRender2Child from './ReRender2Child';

function ReRender2() {
  const [count, setCount] = useState(0);

  const countUp = () => {
    setCount(count + 1);
  };

  return (
    <>
      <button onClick={countUp} type="button">count up</button>
      <ReRender2Child count={count} />
    </>
  );
}

export default ReRender2;
