/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { getUsers, deleteUser } from "../actions/userActions";
import { useSelector, useDispatch } from "react-redux";
import ListUsers from "./ListUsers";

const ListUsersContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllUsers = () => dispatch(getUsers());

    getAllUsers();
  }, []);

  const users = useSelector((state) => state.users.users);

  const handleDeleteUser = (userId) => dispatch(deleteUser(userId));

  const handleCopyUserId = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ListUsers
      users={users}
      handleCopy={handleCopyUserId}
      handleDelete={handleDeleteUser}
    />
  );
};

export default ListUsersContainer;
