import mongoose from "mongoose";
const userSchema = mongoose.Schema({
  name: {
    type: String,
  },

  email: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
});
const Feedback = mongoose.model("Feedback", userSchema);
export default Feedback;
