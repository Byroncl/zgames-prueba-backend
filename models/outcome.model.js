const mongoose = require("mongoose");
const { Schema } = mongoose;

const outcomeSchema = new Schema(
  {
    specifiers: String,
    odds: Number,
    oddsUS: Number,
    active: Boolean,
    isPlayerOutcome: Boolean,
    probability: Number,
    outcomeName: {
      es: String,
      en: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Outcome", outcomeSchema);