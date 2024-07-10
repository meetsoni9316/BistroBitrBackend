import User from "../Model/User.model.js";
import bcryptjs from "bcryptjs";


export const signup = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "User already exists! Try logging in instead." });
    }
    const hashPasswords = await bcryptjs.hash(password, 10);
    const createdUser = new User({
      fullname: fullname,
      email: email,
      password: hashPasswords,
    });

    await createdUser.save();
    res.status(201).json({
      message: "Registration successful! You can now log in.",
      user: {
        _id: createdUser._id,
        email: createdUser.email,
        fullname: createdUser.fullname,
      },
    });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again." });
    }

    const ismatch = await bcryptjs.compare(password, user.password);

    if (!ismatch) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again." });
    }

    return res.status(200).json({
      message: "Welcome back! You have logged in.",
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    console.log("error:" + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
