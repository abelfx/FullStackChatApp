import jwt from "jsonwebtoken";
import User from "../model/model.js";

const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) return res.sendStatus(401);

    const decoded = jwt.verify(token, process.env.secret_key);

    if (!decoded) return req.sendStatus(403);

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) return res.status(401).send("user not found");

    req.user = user;

    next();
  } catch (err) {
    console.log("Error in the protectRoute Middleware", err);
    res.status(500).send("Internal Server Error");
  }
};
export default protectRoute;
