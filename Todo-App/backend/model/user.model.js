const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  userName: {
    type: String,
    require: true,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
  },
  listId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "listSchema",
    },
  ],
});

const user = mongoose.model("userSchema", userSchema);
module.exports = user;
