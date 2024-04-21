import React, { useState } from "react";

function Displayname() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
  });

  const [fullName, setFullName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => {
      return {
        ...prevUser,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = `${user.firstName} ${user.lastName}`;
    setFullName(name);
  };

  return (
    <>
      <form action="#">
        <h1>First Name Display</h1>

        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label htmlFor="firstName">
          Last Name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>
        <br />
        <div>{fullName.length ? <span> Full Name : {fullName}</span> : ""}</div>
      </form>
    </>
  );
}

export default Displayname;
