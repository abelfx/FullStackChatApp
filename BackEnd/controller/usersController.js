import User from "../model/model.js";

export const getUsers = async (req, res) => {
  try {
    const userId = req.user._id;
    const users = await User.find({ _id: { $ne: userId } }).select("-password");
    res.status(201).json(users);
  } catch (err) {
    console.log("Error in users controller ", err);
    res.status(501).send("Internal Server Error");
  }
};
