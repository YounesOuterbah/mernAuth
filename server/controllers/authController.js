import { User } from "../models/User.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(500).json({ message: "user already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = new User({
      username,
      email,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
