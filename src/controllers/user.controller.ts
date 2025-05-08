import { Request, Response } from "express";
import * as bcrypt from "bcryptjs";
import { UserInput } from "../types/user.type";
import userService from "../services/user.service";

const register = async (req: Request, res: Response) => {
  const { email, password, username }: UserInput = req.body;
  try {
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await userService.register({
      email,
      password: hashPassword,
      username,
    });
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const login = async (req: Request, res: Response) => {
  const { password, username }: UserInput = req.body;
  try {
    const user = await userService.findByUsername(username);
    if (!user) return res.status(401).json({ message: "Login failed !" });
    const isMatch = bcrypt.compareSync(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Login failed !" });
    return res.json({ user });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export default { login, register };
