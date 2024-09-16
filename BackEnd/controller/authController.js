import bcrypt from "bcryptjs";
import users from "../model/model.js";
import generateTokens from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;

    if (password != confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const User = await users.findOne({ username });

    if (User) {
      return res.status(403).json({ error: "username already exists" });
    }

    // hash the password

    const hashedpassword = await bcrypt.hash(password, 10);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    let profilepic = "";

    if (gender === "male") {
      profilepic = boyProfilePic;
    } else if (gender === "female") {
      profilepic = girlProfilePic;
    }

    // I AM AT TIME 45 MINUTES OF THE VIDEO

    const user = new users({
      fullname,
      username,
      password: hashedpassword,
      gender,
      profilepic,
    });

    await user.save();

    if (user) {
      generateTokens(user._id, res);

      res.status(201).json({
        id: user._id,
        username: user.username,
        password: user.password,
        gender: user.gender,
        profile: user.profilepic,
      });
    }
  } catch (err) {
    console.log("error while signing up", err);
    res.status(501).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await users.findOne({ username });
    const validpassword = await bcrypt.compare(password, user?.password || "");

    console.log(user);
    if (!user || !validpassword) {
      return res.status(403).send("Invalid credentials");
    }

    generateTokens(user._id, res);

    res.status(201).json({
      id: user.id,
      fullname: user.fullname,
      username: user.username,
      profilepic: user.profilepic,
    });
  } catch (err) {
    console.log("error while logging in", err);
    res.status(501).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(201).json({ status: "logout successful" });
  } catch (err) {
    console.log("Error while logging out", err);
    res.status(500).send("Internal Server error");
  }
};
