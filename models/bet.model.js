const mongoose = require("mongoose");
const { Schema } = mongoose;
const betSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "El usuario es obligatorio"],
    },
    event: {
      type: String, // Cambiado de ObjectId a String
      required: [true, "El evento es obligatorio"],
    },
    team: {
      type: String,
      required: [true, "El equipo seleccionado es obligatorio"],
    },
    amount: {
      type: Number,
      required: [true, "El monto de la apuesta es obligatorio"],
      min: [1, "El monto debe ser mayor a 0"],
    },
    odds: {
      type: Number,
      required: [true, "Las cuotas son obligatorias"],
    },
    possibleWin: {
      type: Number,
      required: [true, "La posible ganancia es obligatoria"],
    },
    status: {
      type: String,
      enum: ["pending", "won", "lost"],
      default: "pending",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Bet", betSchema);
