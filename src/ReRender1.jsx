import { useState } from 'react';

function ReRender1() {
  const [text, setText] = useState('');
  console.log(`ReRender1 text: ${text}`);

  const changeText = (e) => {
    setText(e.target.value);
  };

  return (
    <input type="text" onChange={changeText} />
  );
}

export default ReRender1;
