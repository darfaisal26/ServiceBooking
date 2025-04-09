import { Request, Response } from "express";

export const getAllUsers = async (req: Request, res: Response) => {
  res.status(200).json({
    message: "mubarak",
  });
};
