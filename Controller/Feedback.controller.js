import Feedback from "../Model/Feedback.model.js";

export const feedback = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const createdfeedback = new Feedback({
      name: name,
      email: email,
      message: message,
    });

    await createdfeedback.save();
    res.status(200).json({ message: "Thankyou!" });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
