import { useState } from 'react'

export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });
  const [name, setName] = useState({ firstName: '', surname: '' });

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  function handleNameChange(e) {
    setName({...name, firstName: e.target.value});
  };

  function handleSurnameChange(e) {
    setName({...name, surname: e.target.value});
  }

  return (
    <>
      <h1>{name.firstName}{" "}{name.surname}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <Input label={'First Name'} value={name.firstName} onChange={handleNameChange} />
      <Input label={'Surname'} value={name.surname} onChange={handleSurnameChange} />
    </>
  );
}

function Input({ label, value, onChange }) {
  return (
    <label>{label}{' '}
      <input value={value} onChange={onChange} />

    </label>    
  );
}