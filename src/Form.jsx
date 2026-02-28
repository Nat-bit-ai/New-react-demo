import React, { useState } from "react";

function MyForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isEmployed, setIsEmployed] = useState(false);
  const [collectData, setCollectedData] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();

    const confirmName = prompt("please confirm your name");

    if (confirmName !== name) {
      console.log("name doesn't match");
      return;
    }

    const newEntry = {
      name,
      age,
      isEmployed
    };
    setCollectedData([...collectData, newEntry]);
    setName("");
    setAge("");
    setIsEmployed(false);
  };

  return (
    <>
      <form onSubmit={handleClick}>
        <input
          type="text"
          value={name}
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="number"
          value={age}
          placeholder="Enter age"
          onChange={(e) => setAge(e.target.value)}
        />

        <label>
          Employed:
          <input
            type="checkbox"
            checked={isEmployed}
            onChange={(e) => setIsEmployed(e.target.checked)}
          />
        </label>

        <button type="submit">Send</button>
      </form>

      <h2>Submitted Data</h2>

      {collectData.map((person, index) => (
        <div key={index}>
          <p>Name: {person.name}</p>
          <p>Age: {person.age}</p>
          <p>Employment: {person.isEmployed ? "Yes" : "No"}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default MyForm;