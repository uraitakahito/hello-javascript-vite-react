import ReRender1 from './ReRender1';
import ReRender2 from './ReRender2';

function ReRender() {
  return (
    <div>
      The following three situations trigger re-rendering in React
      <div>
        <strong>The state is updated</strong>:
        <ReRender1 />
      </div>
      <div>
        <strong>The passed Props are changed</strong>:
        <ReRender2 count={0} />
      </div>
    </div>
  );
}

export default ReRender;
