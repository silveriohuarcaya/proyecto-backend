/**
 * User API
 */
import { Router } from "express";

import {
  createUserHandler,
  deleteUserHandler,
  getAllUserHandler,
  getSingleUserHandler,
  updateUserHandler,
} from "./user.controller.js";

const router = Router();

router.get("/", getAllUserHandler);
router.get("/:id", getSingleUserHandler);
router.post("/", createUserHandler);
router.patch("/:id", updateUserHandler);
router.delete("/:id", deleteUserHandler);

export default router;
