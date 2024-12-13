import { useState } from 'react';

export default function StateForm() {
  const [form, setForm] = useState({
    name: 'alice',
    age: '18',
  });
  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  const show = () => {
    console.log(form);
  };
  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={form.name}
          onChange={handleForm}
        />
      </div>
      <div>
        <label htmlFor="age">age:</label>
        <input
          id="age"
          type="text"
          name="age"
          value={form.age}
          onChange={handleForm}
        />
      </div>
      <div>
        <button type="button" onClick={show}>Show</button>
      </div>
      <p>Hello, {form.name} {form.age}</p>
    </form>
  );
}
