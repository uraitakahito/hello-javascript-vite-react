import { memo } from 'react';

const ReRender1MemorizationChild = memo(() => {
  console.log('ReRender1MemorizationChild is called');

  return (
    <p>ReRender1MemorizationChild</p>
  );
});

export default ReRender1MemorizationChild;
