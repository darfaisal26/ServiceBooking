// src/routes/user.routes.ts
import { Router } from "express";
import { handleGetUser, handleGetUsers } from "../controllers/user.controller";

const router = Router();

router.get("/users", handleGetUsers);
// router.get("/users/:id", handleGetUser);

export default router;
