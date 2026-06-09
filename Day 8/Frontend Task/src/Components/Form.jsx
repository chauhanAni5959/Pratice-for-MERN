import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Form submitted:", name);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>
          {name.firstName} - {name.lastName}
        </h1>

        <label>FirstName</label>
        <input
          type="text"
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
          value={name.firstName}
        />

        <label>LastName</label>
        <input
          type="text"
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
          value={name.lastName}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
