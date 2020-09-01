const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  timezone: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  tokkenApp: {
    type: String,
    default: "none",
  },
  country: {
    type: String,
    default: "MEX",
  },
  supervisor: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: false,
  },
  profileImg: {
    type: String,
    required: false,
  },
});

// userSchema.path('soccerSeasonId').validate((supervisor) => {
//     console.log(`Inside validator with seasonApiRef value -> ${supervisor}`)
//     return userSchema.findOne({ _id: supervisor })
//     .then(user => {
//         if(!user){
//             return false;
//         } else {
//             return true;
//         }
//     })
// });

module.exports = mongoose.model("User", userSchema);
