// src/controllers/user.controller.ts
import { Request, Response } from "express";
import { getAllUsers, getSingleUser } from "../services/user.service";

export const handleGetUsers = async (req: Request, res: Response) => {
  try {
    const users = await getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch users",
      details: (error as Error).message,
    });
  }
};

export const handleGetUser = async (req: Request, res: Response) => {
  try {
    const user = await getSingleUser(Number(req.params.id));
    res.json(user);
  } catch (error) {
    const err = error as Error;
    if (err.message === "User not found") {
      return res.status(404).json({ error: err.message });
    }
    res.status(500).json({ error: "Failed to fetch user" });
  }
};
