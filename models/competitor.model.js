const mongoose = require("mongoose");
const { Schema } = mongoose;

const competitorSchema = new Schema(
  {
    score: Number,
    competitorName: {
      es: String,
      en: String,
    },
    penaltyScore: Number,
    qualifier: String,
    countryName: {
      es: String,
      en: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Competitor", competitorSchema);
