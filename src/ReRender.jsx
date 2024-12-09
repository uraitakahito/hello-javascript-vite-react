import ReRender1 from './ReRender1';

function ReRender() {
  return (
    <div>
      The following three situations trigger re-rendering in React
      <div>
        <strong>The state is updated</strong>:
        <ReRender1 />
      </div>
    </div>
  );
}

export default ReRender;
