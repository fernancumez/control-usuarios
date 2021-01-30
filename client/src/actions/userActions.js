import { API } from "../config";
import { GET_USERS, CREATE_USER, DELETE_USER } from "../types";

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(API);

      const data = await res.json();

      dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createUser = (data) => {
  return async (dispatch) => {
    try {
      let config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      };

      const res = await fetch(API, config);
      const { user } = await res.json();

      dispatch({ type: CREATE_USER, payload: user });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = window.confirm("Quieres eliminar este usuario?");
      if (response) {
        await fetch(`${API}/${userId}`, {
          method: "DELETE",
        });

        dispatch({ type: DELETE_USER, payload: userId });
      }
    } catch (error) {
      console.log(error);
    }
  };
};
