import React from "react";

const AddUser = (props) => {
  // This function adds an event listener that when onSubmit, it will not erase the input values
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div onSubmit={addUserHandler}>
      <form>
        <label htmlFor>Username</label>
        <input id="username" type="text" />
        <label htmlFor>Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;
