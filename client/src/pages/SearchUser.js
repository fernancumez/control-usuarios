import React, { useState } from "react";
import { API } from "../config";

const SearchUser = () => {
  const [text, setText] = useState("");

  const handleSearch = async (evt) => {
    try {
      evt.preventDefault();
      const res = await fetch(`${API}/${text}`);
      const data = await res.json();

      data.message ? alert(data.message) : alert("Usuario no encontrado");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className="form-inline my-2 my-lg-0" onSubmit={handleSearch}>
      <input
        className="form-control mr-sm-2"
        type="search"
        placeholder="Código usuario"
        aria-label="Search"
        onChange={(evt) => setText(evt.target.value)}
        value={text}
        required
      />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
        Buscar
      </button>
    </form>
  );
};

export default SearchUser;
