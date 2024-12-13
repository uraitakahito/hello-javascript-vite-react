import { useRef } from 'react';

export default function UncontrolledComponent() {
  const name = useRef(null);
  const age = useRef(null);
  const show = () => {
    console.log(name.current.value, age.current.value);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          ref={name}
          defaultValue="alice"
        />
      </div>
      <div>
        <label htmlFor="age">age:</label>
        <input
          id="age"
          type="text"
          ref={age}
          defaultValue="18"
        />
      </div>
      <div>
        <button type="button" onClick={show}>Show</button>
      </div>
    </form>
  );
}
