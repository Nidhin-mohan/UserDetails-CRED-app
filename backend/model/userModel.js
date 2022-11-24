const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
  name : {
    type: String,
    require: [true, "Name required"],
    trim: true,
    maxlength: [25, "name must be 25 Ch long"],
  },

  email: {
    type: String,
    require: [true, "Email is Required"],
    unique: true,
  },
});

module.exports = mongoose.model("User", userSchema)