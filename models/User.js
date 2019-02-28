const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  rollNo: {
    type: String
  },
  name: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  location: {
    type: String
  },
  year: {
    type: String
  },
  joined: {
    type: Date,
    default: Date.now
  },
  gender: {
    type: String
  },
  branch: {
    type: String
  }
});

module.exports = User = mongoose.model("myStudent", UserSchema);