const mongoose = require("mongoose");
const { Schema } = mongoose;

const marketSchema = new Schema(
  {
    marketId: Number,
    producerId: Number,
    eventId: String,
    isBettingOpen: String,
    favourite: Boolean,
    isMarketCustomBet: String,
    marketName: {
      es: String,
      en: String,
    },
    marketLines: [
      {
        specifiers: String,
        status: String,
        outcomes: [{ type: Schema.Types.ObjectId, ref: "Outcome" }],
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Market", marketSchema);
