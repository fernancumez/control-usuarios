import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../actions/userActions";
import UserNew from "./UserNew";

const UserNewContainer = () => {
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const handleChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();
      const data = { username };

      dispatch(createUser(data));
      setUsername("");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <UserNew
      username={username}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default UserNewContainer;
