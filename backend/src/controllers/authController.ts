import { Request, Response } from "express";
import { getUsers } from "../helpers/helper";
import jwt from "jsonwebtoken";

export const loginController = (req: Request, res: Response) => {
  const { email, password } = req.body;
  const users = getUsers();

  const user = users.find((u) => u.email === email);

  if (!user) {
    res.status(404).json({ success: false, error: "user not found" });
    return;
  }

  if (password !== user.password) {
    res.status(401).json({ success: false, error: "Incorrect password" });
    return;
  }

  const accessToken = jwt.sign(
    { user: { email } },
    process.env.JWT_SECRET as string
  );

  res
    .status(200)
    .json({ success: true, message: "Login success", accessToken });
};

export const registerController = (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: "Register controller" });
};
