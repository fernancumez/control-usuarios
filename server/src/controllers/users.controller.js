const User = require("../models/User");

// Funcion que nos permite ver los usuarios registrados
export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    return res.status(200).json({ users });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Funcion para buscar un usuario en especifico
export const getUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Funcion cuando queremos crear un nuevo usuario
export const createUser = async (req, res) => {
  try {
    const { username } = req.body;

    const newUser = new User({ username });

    const user = await newUser.save();
    return res.status(201).json({ message: "User created successfully", user });
  } catch (error) {
    return res.status(400).json({ error });
  }
};

// Funcion para eliminar un usuario
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const userDeleted = await User.findByIdAndDelete(userId);

    if (!userDeleted) return res.status(404).json({ error: "User not found" });
    return res.status(200).json("User deleted");
  } catch (error) {
    return res.status(400).json(error);
  }
};
