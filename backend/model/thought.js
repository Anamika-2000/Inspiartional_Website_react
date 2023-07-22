const mongoose = require("mongoose");

const ThoughtSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      require: true,
      min: 3,
      max: 20,
    },
    lastName: {
      type: String,
      required: true,
      max: 50,
    },
    Email: {
      type: String,
      required: true,
      min: 30,
    },
    phoneNumber: {
      type: String,
      default: "",
    },
    inspiration: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Thought", ThoughtSchema);
