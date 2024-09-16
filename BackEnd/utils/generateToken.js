import jwt from "jsonwebtoken";

const generateTokens = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.secret_key, {
    expiresIn: "10d",
  });

  res.cookie("jwt", token, {
    httpOnly: true, // prevents scripting attacks
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "strict", // prevents request forgery attacks
    secure: process.env.NODE_ENV !== "development",
  });
};

export default generateTokens;
