import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({
    fName: "John",
    lName: "",
    age: 100,
  });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  const handleFirstNameChange = (e) => {
    const value = e.target.value.trim();

    setPerson({ ...person, fName: value });
  };

  const handleLastNameChange = (e) => {
    const value = e.target.value.trim();

    setPerson({ ...person, lName: value });
  };

  const hasLastName = person.lName !== "";
  let fullName = person.fName;
  if (hasLastName) fullName += " " + person.lName;

  return (
    <>
      <h1>{fullName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <label htmlFor="fName">First Name</label>
      <input
        type="text"
        name="fName"
        id="fName"
        placeholder="e.g., John"
        autoComplete="given-name"
        onChange={handleFirstNameChange}
      />
      <label htmlFor="lName">Last Name</label>
      <input
        type="text"
        name="lName"
        id="lName"
        placeholder="e.g., Doe"
        autoComplete="family-name"
        onChange={handleLastNameChange}
      />
    </>
  );
}

export { Person };
