import React from "react";

const UserNew = ({ username, handleChange, handleSubmit }) => {
  return (
    <div className="card">
      <div className="card-header text-center">
        <h3>Crear un usuario</h3>
      </div>
      <form onSubmit={handleSubmit} className="card-body">
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-secondary">
          <i>Guardar</i>
        </button>
      </form>
    </div>
  );
};

export default UserNew;
