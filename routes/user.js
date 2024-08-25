import express from "express";

import User from "../models/User.js";

const router = express.Router();


router.get("/all", async (req, res) => {
    try {
      const User = await User.find();
      res.status(200).json(User);
    } catch (err) {
      res.status(500).json({ message: "Failed to fetch User", error: err.message });
    }
  });

export default router;