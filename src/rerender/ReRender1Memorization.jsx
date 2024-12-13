import { useState } from 'react';
import ReRender1MemorizationChild from './ReRender1MemorizationChild';

function ReRender1() {
  const [text, setText] = useState('');
  console.log(`ReRender1 is called: ${text}`);

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <>
      <input type="text" onChange={changeText} />
      <ReRender1MemorizationChild />
    </>
  );
}

export default ReRender1;
