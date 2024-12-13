const mongoose = require("mongoose");
const { Schema } = mongoose;

const eventSchema = new Schema(
  {
    tournamentId: String,
    eventStatus: {
      statusEventSport: String,
      matchStatus: {
        es: String,
        en: String,
      },
    },
    coverageInfo: {
      isLive: Boolean,
      bookingStatus: String,
    },
    competitorHome: { type: Schema.Types.ObjectId, ref: "Competitor" },
    competitorAway: { type: Schema.Types.ObjectId, ref: "Competitor" },
    eventId: String,
    sportId: String,
    sportEventName: {
      es: String,
      en: String,
    },
    scheduled: Date,
    eventType: String,
    producerId: Number,
    producerName: String,
    isCustomBet: String,
    tournament: {
      categoryId: String,
      tournamentName: {
        es: String,
        en: String,
      },
    },
    markets: [{ type: Schema.Types.ObjectId, ref: "Market" }],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Event", eventSchema);
