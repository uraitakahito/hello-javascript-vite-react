import { useState } from 'react';

export default function App() {
  console.log('App');
  const [text, setText] = useState('');

  const changeText = (e) => {
    setText(e.target.value);
  };

  const todayDate = () => {
    console.log('Date');
    const dateObj = new Date();
    const dateString = `${dateObj.getFullYear()}年${
      dateObj.getMonth() + 1
    }月${dateObj.getDate()}日`; // YYYY年MM月DD日
    return <p>日付：{dateString}</p>;
  };

  return (
    <>
      <p>App component</p>
      <input type="text" onChange={changeText} />
      <br />
      {todayDate()}
    </>
  );
}
