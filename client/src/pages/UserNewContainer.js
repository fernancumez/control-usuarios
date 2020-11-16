import React, { useState, useContext } from "react";
import { ListUsersContext } from "../context/ListUsersContext";
import { API } from "../config";
import UserNew from "./UserNew";

const UserNewContainer = () => {
  const [username, setUsername] = useState("");
  const { setGetUsers } = useContext(ListUsersContext);

  const handleChange = (evt) => {
    setUsername(evt.target.value);
  };

  const handleSubmit = async (evt) => {
    try {
      evt.preventDefault();

      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: username }),
      };

      await fetch(API, config);
      setUsername("");
      setGetUsers(true);
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
