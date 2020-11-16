import React from "react";

const ListUsers = ({ users, handleDelete, handleCopy }) => (
  <ul className="list-group">
    {users.map((user) => (
      <li className="list-group-item list-group-item-action" key={user._id}>
        <b>Usuario:</b> {user.username}
        <span>
          <button
            className="btn btn-danger float-right text-light cursor-pointer rounded-pill"
            onClick={() => handleDelete(user._id)}
          >
            Eliminar
          </button>
          <button
            onClick={() => handleCopy(user._id)}
            className="btn btn-warning float-right text-light cursor-pointer rounded-pill"
          >
            Código
          </button>
        </span>
      </li>
    ))}
  </ul>
);

export default ListUsers;
