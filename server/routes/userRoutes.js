import express from "express";
import {
  getNotificationsList,
  getTeamList,
  loginUser,
  logoutUser,
  registerUser,
} from "../controllers/userController.js";
import { isAdminRoute, protectRoute } from "../middlewares/authMiddlewaves.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);

router.get("/get-team", protectRoute, isAdminRoute, getTeamList);
router.get("/notifications", protectRoute, getNotificationsList);

export default router;
