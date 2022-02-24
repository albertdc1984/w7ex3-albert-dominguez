const { Schema, model } = require("mongoose");

const personaSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  centro: Schema.Types.ObjectId,
  vacuna: Schema.Types.ObjectId,
  dosis: {
    type: Array,
  },
});

const Persona = model("Persona", personaSchema, "personas");

module.exports = Persona;
