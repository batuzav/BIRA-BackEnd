const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  latitudeDelta: {
    type: Number,
    default: 0.012,
  },
  longitudeDelta: {
    type: Number,
    default: 0.012,
  },
  LocationHost: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  allUser: {
    type: Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Location", LocationSchema);
