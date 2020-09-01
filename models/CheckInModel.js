const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CheckInSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  locationId: {
    type: Schema.Types.ObjectId,
    ref: "Location",
    required: false,
  },
  latitudeDelta: {
    type: Number,
    default: 0.012,
  },
  longitudeDelta: {
    type: Number,
    default: 0.012,
  },
  type: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("CheckIn", CheckInSchema);
