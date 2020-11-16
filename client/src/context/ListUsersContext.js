import { useState, createContext, useEffect } from "react";
import { API } from "../config";

export const ListUsersContext = createContext();

export const ListUsersProvider = (props) => {
  const [users, setUsers] = useState([]);
  const [getUsers, setGetUsers] = useState(true);

  useEffect(() => {
    if (getUsers) fetchUsers();
  }, [getUsers]);

  const fetchUsers = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();

      setUsers(data);
      setGetUsers(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ListUsersContext.Provider
      value={{ users, getUsers, setUsers, setGetUsers }}
    >
      {props.children}
    </ListUsersContext.Provider>
  );
};
