import { useContext } from "react";
import { ListUsersContext } from "../context/ListUsersContext";
import { API } from "../config";
import ListUsers from "./ListUsers";

const ListUsersContainer = () => {
  const { users, setGetUsers } = useContext(ListUsersContext);

  const handleDelete = async (userId) => {
    try {
      const response = window.confirm("Quieres eliminar este usuario?");
      if (response) {
        await fetch(`${API}/${userId}`, {
          method: "DELETE",
        });
        setGetUsers(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleCopy = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ListUsers
      users={users}
      handleDelete={handleDelete}
      handleCopy={handleCopy}
    />
  );
};

export default ListUsersContainer;
