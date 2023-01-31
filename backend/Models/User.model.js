const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true },
    dob: { type: String, require: true },
    address: { type: String, require: true },
    country: { type: String, require: true },
  },
  {
    versionKey: false,
  }
);

const userModel = new mongoose.model("user", userSchema);

module.exports = {
  userModel,
};
