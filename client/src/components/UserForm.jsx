import { useEffect, useState } from "react";
import PropTypes from "prop-types";

export const UserForm = ({ initialUserForm, handleAddUser, selectedUser }) => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { id, username, password, email } = userForm;

  useEffect(() => {
    setUserForm({ ...selectedUser });
  }, [selectedUser]);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({ ...userForm, [name]: value });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!username || (!password && !id) || !email) {
      alert("All fields must be filled");
      return;
    }
    handleAddUser(userForm);
    setUserForm(initialUserForm);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        className="form-control my-3 w-75"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />
      {!id && (
        <input
          className="form-control my-3 w-75"
          placeholder="Password"
          type="password"
          name="password"
          value={password}
          onChange={onInputChange}
        />
      )}
      <input
        className="form-control my-3 w-75"
        placeholder="Email"
        name="email"
        value={email}
        onChange={onInputChange}
      />
      <button className="btn btn-primary" type="submit">
        {!id ? "Create" : "Update"}
      </button>
    </form>
  );
};

UserForm.propTypes = {
  initialUserForm: PropTypes.object.isRequired,
  handleAddUser: PropTypes.func.isRequired,
  selectedUser: PropTypes.object.isRequired,
};
