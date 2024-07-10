import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  number: {
    type: Number,
    required: true,
  },

  meal: {
    type: String,
    required: true,
  },

  date: {
    type: Date,
    required: true,
  },
});

const Table = mongoose.model("Table", userSchema);
export default Table;
