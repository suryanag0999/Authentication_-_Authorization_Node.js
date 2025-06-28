import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

// Sample protected route
router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: "Protected content access granted",
    user: req.user
  });
});

export default router;
