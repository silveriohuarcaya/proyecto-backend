/**
 * Healthcheck API
 * @module api/healthcheck
 */

// const { Router } = require("express");
import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "This server is running!!" });
});

// module.exports = router;
export default router;
