export const UserRow = ({
  id,
  username,
  email,
  password,
  handleRemoveUser,
  handleSelectedUserForm,
}) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() =>
            handleSelectedUserForm({ id, username, email, password })
          }
        >
          Update
        </button>
      </td>
      <td>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => handleRemoveUser(id)}
        >
          Remove
        </button>
      </td>
    </tr>
  );
};
