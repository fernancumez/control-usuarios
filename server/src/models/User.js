const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String, // Tipo de dato
      required: true, // Campo obligatorio
      unique: true, // Evita tener espacions innecesarios
      trim: true, // Verifica que los usuarios no se repitan
    },
  },
  {
    timestamps: true, // Cuando se cree un dato, se guarde de forma automatica la fecha de creacion, actualizacion
  }
);

module.exports = model("User", userSchema);
