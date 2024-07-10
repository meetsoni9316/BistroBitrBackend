import Table from "../Model/Reservation.model.js";

export const table = async (req, res) => {
  try {
    const { name, email, number, meal, date } = req.body;

    const createdtable = new Table({
      name: name,
      email: email,
      number: number,
      meal: meal,
      date: date,
    });

    await createdtable.save();

    res
      .status(200)
      .json({
        message: "Reservation confirmed! We look forward to seeing you.",
      });
  } catch (error) {
    console.log("Error: " + error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
