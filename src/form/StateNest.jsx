import { useState } from 'react';

export default function StateNest() {
  const [form, setForm] = useState({
    name: 'alice',
    address: {
      prefecture: 'tokyo',
      city: 'seoul',
    },
  });

  const handleForm = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddress = (e) => {
    setForm({
      ...form,
      address: {
        ...form.address,
        [e.target.name]: e.target.value,
      },
    });
  };

  const show = () => {
    console.log(form);
  };

  return (
    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" name="name" value={form.name} onChange={handleForm} />
      </div>
      <div>
        <label htmlFor="prefecture">Prefecture:</label>
        <input id="prefecture" type="text" name="prefecture" value={form.address.prefecture} onChange={handleAddress} />
      </div>
      <div>
        <label htmlFor="city">City:</label>
        <input id="city" type="text" name="city" value={form.address.city} onChange={handleAddress} />
      </div>
      <div>
        <button type="button" onClick={show}>Show</button>
      </div>
    </form>
  );
}
