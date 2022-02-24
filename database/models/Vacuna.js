const { Schema, model } = require("mongoose");

const vacunaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  dosis: {
    type: Number,
    required: true,
  },
});

const Vacuna = model("Vacuna", vacunaSchema, "vacunas");

module.exports = Vacuna;
