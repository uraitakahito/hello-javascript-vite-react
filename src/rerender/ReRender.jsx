import ReRender1 from './ReRender1';
import ReRender2 from './ReRender2';
import ReRender1Memorization from './ReRender1Memorization';

function ReRender() {
  return (
    <>
      <div>
        The following three situations trigger re-rendering in React
        <div>
          <strong>The state is updated</strong>:
          <ReRender1 />
        </div>
        <div>
          <strong>The passed Props are changed</strong>:
          <ReRender2 />
        </div>
      </div>
      <div>
        <strong>The child component is memoized, so it will not re-render</strong>:
        <ReRender1Memorization />
      </div>
    </>
  );
}

export default ReRender;
