const { Schema, model } = require("mongoose");

const ciudadSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  puntosVacunacion: {
    type: Array,
  },
});

const Ciudad = model("Ciudad", ciudadSchema, "ciudades");

module.exports = Ciudad;
