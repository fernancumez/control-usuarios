const User = require("../models/User");
const userCrl = {};

// Funcion que nos permite ver los usuarios registrados
userCrl.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

// Funcion para buscar un usuario en especifico
userCrl.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    user !== null
      ? res.json({ message: "Usuario Encontrado" })
      : res.json({ message: "Usuario No Encontrado" });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
};

// Funcion cuando queremos crear un nuevo usuario
userCrl.createUser = async (req, res) => {
  try {
    const { username } = req.body;

    const newUser = new User({ username });
    await newUser.save();
    res.json("User created");
  } catch (err) {
    console.error(err);
    res.json(err.errmsg);
  }
};

// Funcion para eliminar un usuario
userCrl.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json("User deleted");
  } catch (err) {
    console.error(err);
    res.json(err.errmsg);
  }
};

module.exports = userCrl;
