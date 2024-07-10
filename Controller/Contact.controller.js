import Contact from "../Model/Contact.model.js";

export const contact = async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const createdcontact = new Contact({
      name: name,
      email: email,
      message: message,
    });

    await createdcontact.save();
    res
      .status(200)
      .json({
        message:
          "Thank you for reaching out! We'll respond as soon as possible.",
      });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
